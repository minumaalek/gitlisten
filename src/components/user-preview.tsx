"use client";

import { useModal } from "@/contexts/modal";

export default function UserPreview({ username }: { username: string }) {
  const { openModal } = useModal();

  const clickHandler = async () => {
    const response = await fetch(`/api/users/${username}`);
    const user = await response.json();

    openModal(
      <div className="w-full flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <div className="size-12 bg-blue-400 rounded-full"></div>

          <div className="flex flex-col gap-1">
            <span>{user.username}</span>

            <button className="secondary">View on GitHub</button>
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
