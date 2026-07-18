"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VibeDetails() {
  const [vibe, setVibe] = useState(null);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const id = params.get("vibeId");
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
    <>
      <div className="bg-gray-200">
        <div className="flex items-center justify-start">
          <div className="inline-grid grid-rows-2  border-l-2 border-t-2 border-(--primaryColor) p-2 ">
            <h2>{vibe.vibe}</h2>
            <i className="text-sm justify-self-end">{vibe.creator.username}</i>
          </div>
          <div className="size-13 ml-5">{/* <PlayButton /> */}</div>
        </div>

        <div className="border-2 border-t-0 border-(--primaryColor) p-2">
          <p>{vibe.description}</p>
        </div>
      </div>
    </>
  );
}
