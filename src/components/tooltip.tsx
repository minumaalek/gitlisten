"use client";

import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";

export default function Tooltip({ top, left, content }) {
  const [mounted, setMounted] = useState(false);
  const tooltipRef = useRef(null);
  const tooltipWidth = tooltipRef.current?.getBoundingClientRect().width;
  // let left = desiredLeft;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(
    <div
      style={{
        position: "fixed",
        top,
        left,
      }}
      className="fixed
-translate-x-2/3
bg-black
text-white
p-1
rounded
whitespace-nowrap
text-sm
tooltip
"
    >
      {content}
    </div>,
    document.body,
  );
}
