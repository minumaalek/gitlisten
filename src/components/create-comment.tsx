"use client";
import { newComment } from "../actions/new-comment";
import { useActionState } from "react";
interface CreateCommentProps {
  vibeId: number;
  //   startOpen?: boolean;
}
export default function CreateComment({ vibeId }: CreateCommentProps) {
  const [formState, action, isPending] = useActionState(
    newComment.bind(null, { vibeId }),
    { errors: {} },
  );
  return (
    <form action={action}>
      <div className="flex">
        <input type="text" placeholder="say something..." name="content" />
        <button className="primary">send</button>
      </div>
    </form>
  );
}
