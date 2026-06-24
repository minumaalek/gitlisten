"use client";

import Tooltip from "./tooltip";
import { useRef, useState } from "react";

export default function Icon({ children }: any) {
  const iconRef = useRef<HTMLDivElement>(null);
  const rect = iconRef.current?.getBoundingClientRect();
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const handleMouseEnter = () => {
    const rect = iconRef.current?.getBoundingClientRect();

    if (!rect) return;

    setPosition({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });

    setOpen(true);
  };

  return (
    <div className="relative group w-fit">
      <div
        ref={iconRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          setOpen(false);
          setPosition(null);
        }}
        className="size-xl rounded-full overflow-hidden"
      >
        {children}
      </div>

      <div
        className="
          absolute
          left-1/2
          top-full
          -translate-x-1/2
          mt-2
          hidden
          group-hover:block
          w-max
          z-50
        "
      >
        {open && position && (
          <Tooltip
            top={position.top}
            left={position.left}
            content={"Open profile"}
          />
        )}{" "}
      </div>
    </div>
  );
}
