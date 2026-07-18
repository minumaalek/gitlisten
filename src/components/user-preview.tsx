"use client";

import { useModal } from "@/contexts/modal";
import Link from "next/link";

export default function UserPreview({ username }: { username: string }) {
  const { openModal } = useModal();

  const clickHandler = async () => {
    const response = await fetch(`/api/users/${username}`);
    const user = await response.json();

    openModal(
      <div className="w-full flex flex-col items-center justify-start h-full gap-4">
        <div className="flex w-full items-start justify-start">
          <div className=" flex items-start justify-start w-1/6">
            <div className=" bg-blue-400 rounded-full flex items-center justify-center size-12">
              <img src={user.image} alt={`${user.username} avatar`} />
            </div>
          </div>

          <div className=" flex flex-col place-self-start w-2/6">
            <span>{user.name}</span>
            <i className="">{user.username}</i>
          </div>
          <div className="w-1/2 h-full flex items-center justify-end">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/${user.username}`}
            >
              <button className=" w-full secondary place-self-end">
                View on GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 w-full pt-3">
          {user.vibes.map((vibe: any) => (
            <div key={vibe.id}>
              {vibe.emoji} {vibe.vibe}
            </div>
          ))}
        </div>
      </div>,
    );
  };

  return (
    <div onClick={clickHandler}>
      <i>{username}</i>
    </div>
  );
}
