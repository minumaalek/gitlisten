"use client";
import Link from "next/link";
import UserPreview from "./user-preview";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function VibesList({ vibes }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [vibeId, setVibeId] = useState();
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (vibeId) params.set("vibeId", vibeId);

    router.push(`${pathname}?${params.toString()}`);
  }, [vibeId]);

  return (
    <ul className="flex flex-col gap-2 w-full items-center">
      {vibes.map((vibe, index) => {
        return (
          <li
            onClick={() => setVibeId(vibe.id)}
            key={index}
            className="flex justify-between items-center bg-gray-200 w-96  p-3 h-12 cursor-pointer hover:bg-gray-300"
          >
            <div className="flex flex-1 min-w-0 gap-2">
              <div>{vibe.emoji}</div>
              <span className="truncate">{vibe.vibe}</span>
            </div>
            <UserPreview username={vibe.creator.username!} />
          </li>
        );
      })}
    </ul>
  );
}
