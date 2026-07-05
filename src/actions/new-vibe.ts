"use server";

import { z } from "zod";
import { auth } from "@/auth";
import type { Vibe } from "@/generated/prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
// import paths from "@/path";
import { revalidatePath } from "next/cache";
const vibeSchema = z.object({
  emoji: z.string().min(1),
  vibe: z.string().min(10, { message: "Must be more than 10 characters." }),
  description: z.string().min(20),
  embed: z.string().url(),
});

interface createVibeFormState {
  errors: {
    emoji?: string[];
    vibe?: string[];
    description?: string[];
    embed?: string[];

    _form?: string[];
  };
}

export async function createVibe(
  formState: createVibeFormState,
  formData: FormData,
): Promise<createVibeFormState> {
  //promise is what we wanna return
  const result = vibeSchema.safeParse({
    emoji: formData.get("emoji"),
    vibe: formData.get("vibe"),
    description: formData.get("description"),
    embed: formData.get("embed"),
  });

  const session = await auth();
  if (!session || !session.user)
    return {
      errors: {
        _form: ["Sign in to create the topic."],
      },
    };

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);

    return { errors: result.error.flatten().fieldErrors };
  }
  let vibe: Vibe;
  try {
    vibe = await db.vibe.create({
      data: {
        emoji: result.data.emoji,
        vibe: result.data.vibe,
        description: result.data.description,
        embed: result.data.embed,
        creator: session.user.id,
      },
    });
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error)
      return {
        errors: {
          _form: [err.message],
        },
      };
    else
      return {
        errors: {
          _form: ["Something went wrong."],
        },
      };
  }
  revalidatePath("/");
  // redirect(paths.topicShowPath(topic.slug));
  return { errors: {} };
}
