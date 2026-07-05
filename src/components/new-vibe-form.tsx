"use client";
import EmojisDropdown from "./emojis-dropdown";
import { useState, useActionState } from "react";
import { createVibe } from "@/actions/new-vibe";

export default function NewVibeForm() {
  const [emoji, setEmoji] = useState("👌");
  const [formState, action, isPending] = useActionState(createVibe, {
    errors: {},
  });

  return (
    <form action={action}>
      <div className="flex flex-col size-full items-center justify-center gap-3">
        <h2>New vibe!</h2>
        <div className="flex w-full items-center justify-center">
          <EmojisDropdown value={emoji} onChange={setEmoji} />
          <input type="hidden" name="emoji" value={emoji} />
          <input
            name="vibe"
            type="text"
            placeholder="Short explanation"
            className="w-full"
          />
        </div>
        <textarea name="description" placeholder="description" />
        <input type="text" placeholder="Embed" name="embed" />
        <button className="primary">create</button>
      </div>
    </form>
  );
}
