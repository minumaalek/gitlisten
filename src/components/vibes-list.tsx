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
            className="flex justify-between items-center bg-gray-200 w-full p-3 cursor-pointer hover:bg-gray-300"
          >
            <div className="flex">
              <div>{vibe.emoji}</div>
              <Link href={""}>{vibe.vibe}</Link>
            </div>
            <UserPreview username={vibe.creator.username!} />
          </li>
        );
      })}
    </ul>
  );
}
