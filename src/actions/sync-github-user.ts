"use server";

import { auth } from "@/auth";
import { db } from "@/db";

export async function syncGithubUsername() {
  const session = await auth();

  if (!session?.user?.id) return;

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (user?.username) return;

  const account = await db.account.findFirst({
    where: {
      userId: session.user.id,
      provider: "github",
    },
  });

  if (!account?.access_token) return;

  const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${account.access_token}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  });

  if (!res.ok) return;

  const githubUser = await res.json();

  await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      username: githubUser.login,
    },
  });
}
