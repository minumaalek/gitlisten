"use client";

import { useEffect, useRef, useState } from "react";

export default function EmojisDropdown() {
  const [openEmojis, setOpenEmojis] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenEmojis(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="flex flex-col w-full justify-center items-center relative"
      ref={dropdownRef}
    >
      <button
        className="size-10 text-xl flex justify-center items-center hover:bg-gray-400 bg-gray-300 z-20"
        onClick={() => setOpenEmojis((prev) => !prev)}
      >
        💅
      </button>
      <div
        className={`w-8 bg-amber-500 rounded-full flex flex-col items-center absolute top-2 overflow-y-auto ${openEmojis ? "max-h-32 visible" : "max-h-0 invisible"} transition-all duration-200`}
      >
        <p>🎧</p>
        <p>🎧</p>
        <p>🎧</p>
        <p>🎧</p>
        <p>🎧</p>
        <p>🎧</p>
        <p>🎧</p>
        <p>🎧</p>
        <p>🎧</p>
        <p>🎧</p>
      </div>
    </div>
  );
}
