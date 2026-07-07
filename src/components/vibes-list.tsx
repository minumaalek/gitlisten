import Link from "next/link";
import UserPreview from "./user-preview";
import { db } from "@/db";
export default async function VibesList() {
  const vibes = await db.vibe.findMany({
    include: {
      creator: true, //says go and find the related users || select * from vibe join user on vibe.creator.id == user.id
    },
  });

  return (
    <ul className="flex flex-col gap-2 w-full items-center">
      {vibes.map((vibe, index) => {
        return (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-200 w-full p-3 cursor-pointer hover:bg-gray-300"
          >
            <div className="flex">
              <div>{vibe.emoji}</div>
              <Link href={"/"}>{vibe.vibe}</Link>
            </div>
            <UserPreview username={vibe.creator.username!} />
          </li>
        );
      })}
    </ul>
  );
}
