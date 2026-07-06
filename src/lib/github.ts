import { db } from "@/db";

export async function getGithubUsername(userId: string) {
  const account = await db.account.findFirst({
    where: {
      userId,
      provider: "github",
    },
  });

  if (!account?.access_token) {
    throw new Error("GitHub access token not found.");
  }
  console.log(account);
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${account.access_token}`,
      Accept: "application/vnd.github+json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user.");
  }

  const githubUser = await response.json();

  return githubUser.login as string;
}
