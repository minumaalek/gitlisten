"use client";
import EmojisDropdown from "./emojis-dropdown";
import { useState, useActionState } from "react";
import { createVibe } from "@/actions/new-vibe";

export default function NewVibeForm() {
  const [emoji, setEmoji] = useState("👌");
  const [formState, action, isPending] = useActionState(createVibe, {
    errors: {},
  });
  const createHandler = () => {
    console.log(formState);
  };
  return (
    <form action={action}>
      <div className="flex flex-col size-full items-center justify-center gap-3 h-full">
        <h2>New vibe!</h2>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className=" flex items-center justify-center gap-1">
            <div>
              <EmojisDropdown value={emoji} onChange={setEmoji} />
            </div>
            <input type="hidden" name="emoji" value={emoji} />

            <div className="w-full">
              <input
                name="vibe"
                type="text"
                placeholder="Short explanation"
                className="w-full"
              />
              <p className="text-red-500 text-sm">
                {formState.errors.vibe?.[0]}
              </p>
            </div>
          </div>
          <textarea name="description" placeholder="description" />
          <p className="text-red-500 text-sm">
            {formState.errors.description?.[0]}
          </p>
          <input type="text" placeholder="Embed" name="embed" />
          <p className="text-red-500 text-sm">{formState.errors.embed?.[0]}</p>
          <button disabled={isPending} className="primary">
            create
          </button>
        </div>
      </div>
    </form>
  );
}
