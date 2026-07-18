"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";

const createCommentSchema = z.object({
  content: z.string().min(3),
});

interface CreateCommentFormState {
  errors: {
    content?: string[];
    _form?: string[];
  };
  success?: boolean;
}

export async function newComment(
  { vibeId, parentId }: { vibeId: number; parentId?: string },
  formState: CreateCommentFormState,
  formData: FormData,
): Promise<CreateCommentFormState> {
  const result = createCommentSchema.safeParse({
    content: formData.get("content"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return {
      errors: {
        _form: ["You must sign in to do this."],
      },
    };
  }

  try {
    console.log(session.user.id);
    console.log(typeof vibeId, vibeId);

    await db.comment.create({
      data: {
        content: result.data.content,
        vibeId: Number(vibeId),
        parentId: parentId,
        userId: session.user.id,
      },
    });
  } catch (err) {
    console.error(err);

    if (err instanceof Error) {
      console.error(err.message);

      return {
        errors: {
          _form: [err.message],
        },
      };
    }

    return {
      errors: {
        _form: ["Something went wrong..."],
      },
    };
  }

  const vibe = await db.vibe.findUnique({
    where: {
      id: Number(vibeId),
    },
  });
  console.log(vibe);
  if (!vibe) {
    return {
      errors: {
        _form: ["Failed to revalidate vibe"],
      },
    };
  }

  revalidatePath(`/vibes؟vibeId=${vibeId}`);
  return {
    errors: {},
    success: true,
  };
}
