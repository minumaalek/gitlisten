import { fetchCommentsByVibeId } from "@/db/queries/comments";
import Comment from "./comment";

export default async function VibeComments({ vibeId }: { vibeId: number }) {
  const comments = await fetchCommentsByVibeId(vibeId);

  if (comments.length === 0) {
    return (
      <p className="text-sm text-gray-500">
        Be the first to leave a comment 🎵
      </p>
    );
  }

  return (
    <div className="mt-3 flex flex-col overflow-y-auto h-80">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
