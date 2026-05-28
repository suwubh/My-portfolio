import React, { useEffect, useRef, useState } from "react";

/* fullscreen-triangle vertex shader */
const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

/* animated domain-warped fbm gradient for a quiet charcoal / blue backdrop */
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_mouse;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),                hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0,1.0)),hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = p * 2.0 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p  = uv * vec2(u_resolution.x / u_resolution.y, 1.0) * 1.6;

  float t = u_time * 0.06;

  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
  float f = fbm(p + 3.2 * q + t * 0.5);

  vec3 bg     = vec3(0.035, 0.035, 0.043);
  vec3 deep   = vec3(0.070, 0.070, 0.080);
  vec3 zinc   = vec3(0.150, 0.150, 0.165);
  vec3 blue   = vec3(0.235, 0.510, 0.965);
  vec3 violet = vec3(0.52,  0.33,  0.95);

  vec3 col = bg;
  col = mix(col, deep, clamp(q.x * 0.75, 0.0, 1.0));
  col = mix(col, zinc, smoothstep(0.30, 1.15, f) * 0.28);
  // boosted from 0.12 → 0.20 so the nebula reads clearly
  col = mix(col, blue, smoothstep(0.58, 1.24, q.y + f * 0.4) * 0.20);

  // cursor bloom — visible glow that follows the mouse
  // radius expanded (0.32→0.50) and intensity tripled (0.035→0.11)
  float md = distance(uv, u_mouse);
  col += blue   * 0.11 * smoothstep(0.50, 0.0, md);
  col += violet * 0.04 * smoothstep(0.26, 0.0, md);

  // vignette
  float vig = smoothstep(1.25, 0.25, length(uv - 0.5));
  col *= mix(0.55, 1.06, vig);

  // faint grain to kill banding
  col += (hash(uv * u_resolution.xy + t) - 0.5) * 0.025;

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn("shader compile failed:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function ShaderBackground() {
  const canvasRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", {
        antialias: false,
        alpha: false,
        depth: false,
        stencil: false,
        powerPreference: "low-power",
      }) || canvas.getContext("experimental-webgl");

    if (!gl) {
      setFailed(true);
      return;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) {
      setFailed(true);
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setFailed(true);
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime  = gl.getUniformLocation(program, "u_time");
    const uRes   = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    const SCALE = 0.5; // render at half-res — the field is soft, upscaling is invisible
    const mouse = { x: 0.5, y: 0.58, tx: 0.5, ty: 0.58 };
    let raf;
    let running = true;

    const resize = () => {
      const w = Math.max(1, Math.floor(window.innerWidth  * SCALE));
      const h = Math.max(1, Math.floor(window.innerHeight * SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width  = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const start = performance.now();
    const render = (now) => {
      if (!running) return;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const t = reduce ? 8 : (now - start) / 1000;
      gl.uniform1f(uTime,  t);
      gl.uniform2f(uRes,   canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduce) raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        running = true;
        raf = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onLost = (e) => {
      e.preventDefault();
      running = false;
      cancelAnimationFrame(raf);
    };
    canvas.addEventListener("webglcontextlost", onLost);

    return () => {
      // Note: the WebGL context is intentionally NOT released here.
      // A canvas only ever hands out one context, so on React StrictMode's
      // dev remount we reuse this same one — releasing it would break that.
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextlost", onLost);
    };
  }, []);

  // graceful fallback to CSS blobs if WebGL is unavailable
  if (failed) {
    return (
      <>
        <div className="bg-blob bg-blob--1" />
        <div className="bg-blob bg-blob--2" />
        <div className="bg-blob bg-blob--3" />
      </>
    );
  }

  return <canvas ref={canvasRef} className="bg-canvas" />;
}

export default ShaderBackground;