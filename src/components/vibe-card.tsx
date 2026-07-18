"use client";
import Comment from "./comment";
import { useState, useRef, useEffect } from "react";
import PlayButton from "./play-button";
import VibeDetails from "./vibe-details";
import VibeComments from "./vibe-comments";
export default function VibeCard({ id }) {
  const [cardFull, setCardFull] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setCardFull(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      onClick={() => setCardFull(true)}
      ref={cardRef}
      className={`absolute bottom-0 w-full gap-4 md:static h-5/8 left-0 md:h-[35vw] bg-gray-100 p-5 grid grid-rows-[1fr_2fr] ${cardFull ? "translate-y-0" : "translate-y-80 md:translate-y-0"} transition-all duration-500`}
    >
      <VibeDetails id={id} />

      <VibeComments vibeId={id} />
    </div>
  );
}
