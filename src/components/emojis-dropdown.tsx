"use client";

import { useEffect, useRef, useState } from "react";

export default function EmojisDropdown({ value, onChange }) {
  const emojis = [
    "👌",
    "😂",
    "💅",
    "🚀",
    "💔",
    "🐈",
    "🎧",
    "🙌",
    "🦉",
    "😇",
    "🐌",
  ];

  const [openEmojis, setOpenEmojis] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(value);

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
      className="flex flex-col w-full justify-center items-center"
      ref={dropdownRef}
    >
      <button
        type="button"
        className="size-10 text-xl flex justify-center items-center hover:bg-gray-300 bg-gray-200 border border-gray-400 z-10"
        onClick={() => setOpenEmojis((prev) => !prev)}
      >
        {value}
      </button>
      <div
        className={`shadow-sm border gap-1 border-gray-200 shadow-black absolute top-52 w-8 bg-gray-400 rounded-full flex flex-col items-center overflow-y-auto ${openEmojis ? "max-h-36 visible" : "max-h-0 invisible"} transition-all duration-500`}
      >
        <ul className="mt-6">
          {emojis.map((emoji, i) => (
            <li
              onClick={() => {
                onChange?.(emoji);
                setOpenEmojis(false);
              }}
              key={i}
              className="hover:bg-gray-500 rounded-full p-1"
            >
              {emoji}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
