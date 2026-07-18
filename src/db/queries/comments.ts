import type { Comment } from "@/generated/prisma/client";
import { cache } from "react";
import { db } from "..";

export type CommentWithUser = Comment & {
  user: {
    id: string;
    username: string | null;
    name: string | null;
    image: string | null;
  };
};

export const fetchCommentsByVibeId = cache(
  (vibeId: number): Promise<CommentWithUser[]> => {
    return db.comment.findMany({
      where: {
        vibeId,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
);
