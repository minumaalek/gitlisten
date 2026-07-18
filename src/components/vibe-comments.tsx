"use client";

import { useEffect, useState } from "react";
import CreateComment from "@/components/create-comment";
import Comment from "./comment";

export default function VibeComments({ vibeId }: { vibeId: number }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadComments() {
      const response = await fetch(`/api/comments?vibeId=${vibeId}`);

      if (!response.ok) {
        console.error("Failed to load comments");
        return;
      }

      const data = await response.json();
      console.log(data);

      setComments(data);
    }

    loadComments();
  }, [vibeId]);

  return (
    <section className="mt-5 w-full">
      <h3 className="mb-4 text-lg font-semibold">
        Comments, Stories, More songs...
      </h3>

      <CreateComment vibeId={vibeId} />

      <div className="mt-6 flex flex-col gap-4">
        {comments.length === 0 ? (
          <p className="text-sm text-gray-500">
            Be the first to leave a comment 🎵
          </p>
        ) : (
          <div className="overflow-y-auto h-96">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
