import { NextRequest, NextResponse } from "next/server";
import { fetchCommentsByVibeId } from "@/db/queries/comments";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const vibeId = Number(searchParams.get("vibeId"));

  if (!vibeId) {
    return NextResponse.json({ error: "Invalid vibeId" }, { status: 400 });
  }

  const comments = await fetchCommentsByVibeId(vibeId);

  return NextResponse.json(comments);
}
