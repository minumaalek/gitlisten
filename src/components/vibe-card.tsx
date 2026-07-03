"use client";
import Comment from "./comment";
import { useState, useRef, useEffect } from "react";
import PlayButton from "./play-button";
export default function VibeCard() {
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
      <div className="bg-gray-200">
        <div className="flex items-center justify-start">
          <div className="inline-grid grid-rows-2  border-l-2 border-t-2 border-(--primaryColor) p-2 ">
            <h2>Vibe explanation</h2>
            <i className="text-sm justify-self-end">minu987</i>
          </div>
          <div className="size-13 ml-5">
            <PlayButton />
          </div>
        </div>

        <div className="border-2 border-t-0 border-(--primaryColor) p-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            culpa sint error magnam porro ipsam at aliquam beatae perferendis
            debitis.
          </p>
        </div>
      </div>

      <h3 className="mt-5">Comments, Stories, More songs...</h3>
      <div className=" w-full overflow-y-auto flex flex-col items-start">
        {Array.from({ length: 10 }).map((_, i) => (
          <ul key={i}>
            <Comment />
          </ul>
        ))}
      </div>
    </div>
  );
}
