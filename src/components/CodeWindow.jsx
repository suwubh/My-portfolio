import React, { useEffect, useRef, useState } from "react";
import { profile } from "../data";
import resumeUrl from "../assets/Subhankar_Satpathy.pdf?url";

/* ---- intro script, typed out on mount ---- */
const INTRO = [
  { kind: "cmd", text: "whoami" },
  { kind: "res", text: "Subhankar Satpathy" },
  { kind: "muted", text: "full-stack developer · b.tech '27 · ranchi, india" },
  { kind: "blank" },
  { kind: "cmd", text: "cat stack.json" },
  { kind: "brace", text: "{" },
  { kind: "kv", k: "frontend", v: '"React", "Next.js", "TypeScript"' },
  { kind: "kv", k: "backend ", v: '"Node.js", "WebSockets", "Redis"' },
  { kind: "kv", k: "data    ", v: '"PostgreSQL", "pgvector", "Prisma"' },
  { kind: "brace", text: "}" },
  { kind: "blank" },
  { kind: "cmd", text: "./status --now" },
  { kind: "ok", text: "600+ DSA problems · LeetCode Knight (1769)" },
  { kind: "ok", text: "SIH '25 Finalist · HackQuest '25 Winner" },
  { kind: "ok", text: "open to SDE internships & roles" },
];

/* ---- help output ---- */
const HELP = [
  { kind: "head", text: "available commands" },
  { kind: "help", k: "about", v: "who I am" },
  { kind: "help", k: "projects", v: "jump to my work" },
  { kind: "help", k: "skills", v: "the tech I use" },
  { kind: "help", k: "chess", v: "my chess profile ♟" },
  { kind: "help", k: "resume", v: "open my résumé" },
  { kind: "help", k: "contact", v: "get in touch" },
  { kind: "help", k: "socials", v: "find me online" },
  { kind: "help", k: "whoami", v: "the short version" },
  { kind: "help", k: "clear", v: "clear the screen" },
  { kind: "help", k: "sudo hire-me", v: "try it :)" },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Line({ line }) {
  switch (line.kind) {
    case "cmd":
    case "echo":
      return (
        <div className="cw-line">
          <span className="cw-prompt">❯</span>
          <span className="cw-cmd">{line.text}</span>
          {line.caret && <span className="cw-caret" />}
        </div>
      );
    case "res":
      return (
        <div className="cw-line">
          <span className="cw-arrow">→</span>
          <span className="cw-res">{line.text}</span>
        </div>
      );
    case "muted":
      return <div className="cw-line cw-muted">{line.text}</div>;
    case "hint":
      return <div className="cw-line cw-hint">{line.text}</div>;
    case "brace":
      return <div className="cw-line cw-brace">{line.text}</div>;
    case "kv":
      return (
        <div className="cw-line cw-kv">
          <span className="cw-key">"{line.k.trim()}"</span>
          <span className="cw-colon">: </span>
          <span className="cw-bracket">[</span>
          <span className="cw-val">{line.v}</span>
          <span className="cw-bracket">]</span>
          <span className="cw-comma">,</span>
        </div>
      );
    case "ok":
      return (
        <div className="cw-line">
          <span className="cw-check">✓</span>
          <span className="cw-ok">{line.text}</span>
        </div>
      );
    case "err":
      return <div className="cw-line cw-err">{line.text}</div>;
    case "head":
      return <div className="cw-line cw-headline">{line.text}</div>;
    case "help":
      return (
        <div className="cw-line cw-help">
          <span className="cw-help-cmd">{line.k}</span>
          <span className="cw-help-desc">{line.v}</span>
        </div>
      );
    case "ls":
      return <div className="cw-line cw-ls">{line.text}</div>;
    case "link":
      return (
        <div className="cw-line">
          <span className="cw-arrow">↗</span>
          <a
            className="cw-link"
            href={line.href}
            target="_blank"
            rel="noreferrer"
          >
            {line.text}
          </a>
        </div>
      );
    case "blank":
    default:
      return <div className="cw-line cw-blank">&nbsp;</div>;
  }
}

function CodeWindow() {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState(null);
  const [interactive, setInteractive] = useState(false);
  const [input, setInput] = useState("");

  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const history = useRef([]);
  const histPos = useRef(-1);

  /* intro typing */
  useEffect(() => {
    let cancelled = false;
    let timer;
    let i = 0;
    setLines([]);
    setTyping(null);
    setInteractive(false);

    const wait = (fn, ms) => {
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const step = () => {
      if (i >= INTRO.length) {
        setLines((l) => [
          ...l,
          { kind: "blank" },
          { kind: "hint", text: "type 'help' to explore — or just start typing" },
        ]);
        setInteractive(true);
        return;
      }
      const line = INTRO[i];
      if (line.kind === "cmd") {
        let c = 0;
        const typeChar = () => {
          c += 1;
          setTyping({ kind: "cmd", text: line.text.slice(0, c), caret: true });
          if (c < line.text.length) {
            wait(typeChar, 42 + Math.random() * 55);
          } else {
            wait(() => {
              setLines((l) => [...l, line]);
              setTyping(null);
              i += 1;
              step();
            }, 320);
          }
        };
        typeChar();
      } else {
        wait(() => {
          setLines((l) => [...l, line]);
          i += 1;
          step();
        }, line.kind === "blank" ? 70 : 150);
      }
    };

    wait(step, 650);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  /* keep terminal scrolled to the newest line */
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines, typing, interactive]);

  const pushHistory = (cmd) => {
    if (cmd && history.current[history.current.length - 1] !== cmd) {
      history.current.push(cmd);
    }
    histPos.current = -1;
  };

  const runCommand = (raw) => {
    const cmd = raw.trim();
    const lower = cmd.toLowerCase();

    if (lower === "clear") {
      setLines([]);
      pushHistory(cmd);
      return;
    }

    const echo = { kind: "echo", text: cmd };
    let out = [];

    switch (lower) {
      case "":
        break;
      case "help":
      case "ls -a":
        out = HELP;
        break;
      case "whoami":
        out = [
          { kind: "res", text: "Subhankar Satpathy" },
          {
            kind: "muted",
            text: "full-stack developer · real-time systems · b.tech '27",
          },
        ];
        break;
      case "about":
        out = [{ kind: "ok", text: "opening /about ..." }];
        scrollTo("about");
        break;
      case "projects":
      case "work":
        out = [{ kind: "ok", text: "opening selected work ..." }];
        scrollTo("work");
        break;
      case "skills":
        out = [{ kind: "ok", text: "opening /skills ..." }];
        scrollTo("skills");
        break;
      case "achievements":
        out = [{ kind: "ok", text: "opening /achievements ..." }];
        scrollTo("achievements");
        break;
      case "contact":
        out = [{ kind: "ok", text: "opening /contact ..." }];
        scrollTo("contact");
        break;
      case "resume":
      case "cv":
        out = [{ kind: "ok", text: "opening résumé.pdf in a new tab ..." }];
        window.open(resumeUrl, "_blank", "noopener");
        break;
      case "chess":
        out = [
          { kind: "res", text: "♟  1750 Elo · global top 1% on Chess.com" },
          {
            kind: "link",
            text: "chess.com/member/shubhoooooo",
            href: profile.socials.chess,
          },
          { kind: "muted", text: "send me a bullet challenge :)" },
        ];
        break;
      case "socials":
        out = [
          { kind: "link", text: "github.com/suwubh", href: profile.socials.github },
          {
            kind: "link",
            text: "linkedin.com/in/subhankar-satpathy",
            href: profile.socials.linkedin,
          },
          { kind: "link", text: "x.com/suwubh", href: profile.socials.twitter },
        ];
        break;
      case "ls":
        out = [
          {
            kind: "ls",
            text: "about/   skills/   projects/   achievements/   contact/   resume.pdf",
          },
        ];
        break;
      case "sudo hire-me":
      case "sudo hire me":
        out = [
          { kind: "muted", text: "[sudo] password for recruiter: ········" },
          { kind: "ok", text: "access granted — excellent choice ✦" },
          { kind: "muted", text: "redirecting to /contact ..." },
        ];
        scrollTo("contact");
        break;
      case "sudo":
        out = [
          { kind: "err", text: "nice try — run 'sudo hire-me' instead :)" },
        ];
        break;
      case "echo":
        out = [{ kind: "muted", text: "" }];
        break;
      default:
        out = [
          { kind: "err", text: `command not found: ${cmd}` },
          { kind: "muted", text: "type 'help' to see what I can do" },
        ];
    }

    pushHistory(cmd);
    setLines((l) => {
      const next = [...l, echo, ...out, { kind: "blank" }];
      return next.length > 160 ? next.slice(next.length - 160) : next;
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const h = history.current;
      if (!h.length) return;
      histPos.current = Math.min(histPos.current + 1, h.length - 1);
      setInput(h[h.length - 1 - histPos.current]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const h = history.current;
      if (histPos.current <= 0) {
        histPos.current = -1;
        setInput("");
      } else {
        histPos.current -= 1;
        setInput(h[h.length - 1 - histPos.current]);
      }
    }
  };

  return (
    <div className="code-window">
      <div className="cw-bar">
        <span className="cw-dot cw-dot--r" />
        <span className="cw-dot cw-dot--y" />
        <span className="cw-dot cw-dot--g" />
        <span className="cw-bar-title">subhankar — portfolio — zsh</span>
      </div>
      <div
        className="cw-body"
        ref={bodyRef}
        onClick={() => interactive && inputRef.current?.focus()}
      >
        {lines.map((line, idx) => (
          <Line key={idx} line={line} />
        ))}
        {typing && <Line line={typing} />}
        {interactive && (
          <div className="cw-line cw-input-line">
            <span className="cw-prompt">❯</span>
            <input
              ref={inputRef}
              className="cw-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck="false"
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal command input"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeWindow;
