import type { CommentWithUser } from "@/db/queries/comments";

interface CommentProps {
  comment: CommentWithUser;
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="mb-3 w-full rounded-lg bg-gray-200 p-3">
      <div className="flex items-center gap-2">
        <span className="font-semibold">
          {comment.user.username ?? comment.user.name ?? "Anonymous"}
        </span>
      </div>

      <p className="mt-2 whitespace-pre-wrap">{comment.content}</p>
    </div>
  );
}
