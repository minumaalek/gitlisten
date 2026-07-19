"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import PlayButton from "./play-button";
export default function VibeDetails({ children }) {
  const [vibe, setVibe] = useState(null);
  console.log(vibe);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const id = params.get("vibeId");
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

  useEffect(() => {
    if (!id) return;
    async function loadVibe() {
      const response = await fetch(`/api/vibes/${id}`);
      const data = await response.json();

      setVibe(data);
    }

    loadVibe();
  }, [id]);
  if (!vibe) return null;
  return (
    <div
      onClick={() => setCardFull(true)}
      ref={cardRef}
      className={`absolute bottom-0 w-full gap-4 md:static h-5/8 left-0 md:h-[35vw] bg-gray-100 p-5 grid grid-rows-[1fr_2fr] ${cardFull ? "translate-y-0" : "translate-y-80 md:translate-y-0"} transition-all duration-500 `}
    >
      <div className="bg-gray-200">
        <div className="flex items-center justify-start">
          <div className="inline-grid grid-rows-2  border-l-2 border-t-2 border-(--primaryColor) p-2 ">
            <h2>{vibe.vibe}</h2>
            <i className="text-sm justify-self-end">{vibe.creator.username}</i>
          </div>
          <div className="size-13 ml-5">
            <PlayButton />
          </div>
        </div>

        <div className="border-2 border-t-0 border-(--primaryColor) p-2">
          <p>{vibe.description}</p>
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
