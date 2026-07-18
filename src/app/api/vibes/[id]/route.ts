import { db } from "@/db";
import { NextResponse } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const vibe = await db.vibe.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      creator: true,
    },
  });

  if (!vibe) {
    return NextResponse.json({ message: "Vibe not found" }, { status: 404 });
  }

  return NextResponse.json(vibe);
}

export const vibes = await db.vibe.findMany({
  include: {
    creator: true, //says go and find the related users || select * from vibe join user on vibe.creator.id == user.id.
  },
});
export const lastVibeId = vibes[vibes.length - 1].id;
