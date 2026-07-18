"use client";
import { newComment } from "../actions/new-comment";
import { useActionState } from "react";
interface CreateCommentProps {
  vibeId: number;
  parentId?: string;
  //   startOpen?: boolean;
}
export default function CreateComment({
  vibeId,
  parentId,
}: CreateCommentProps) {
  const [formState, action, isPending] = useActionState(
    newComment.bind(null, { vibeId, parentId }),
    { errors: {} },
  );
  return (
    <form action={action}>
      <div className="flex">
        <input
          type="text"
          placeholder="say something..."
          name="content"
          defaultValue={"hey"}
        />
        <button className="primary">send</button>
      </div>
    </form>
  );
}
