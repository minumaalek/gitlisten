import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> },
) {
  const { username } = await params;

  const user = await db.user.findUnique({
    where: { username },
    include: {
      vibes: true,
    },
  });

  return NextResponse.json(user);
}
