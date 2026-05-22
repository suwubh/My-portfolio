import React from "react";
import ShaderBackground from "./ShaderBackground";

// shader nebula + grid/grain overlays, pinned behind everything
function Background() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <ShaderBackground />
      <div className="bg-grid" />
      <div className="bg-grain" />
    </div>
  );
}

export default Background;
