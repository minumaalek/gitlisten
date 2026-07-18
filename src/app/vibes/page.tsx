import VibesList from "@/components/vibes-list";
import Link from "next/link";
import EmojisDropdown from "@/components/emojis-dropdown";
import VibeCard from "@/components/vibe-card";
import VibesSearchBox from "@/components/vibes-search-box";
import { db } from "@/db";
// !! this variable is repeated in multiple files.
interface VibePageProps {
  searchParams: Promise<{
    vibeId?: string;
  }>;
}

export default async function Vibe({ searchParams }: VibePageProps) {
  const { vibeId } = await searchParams;
  const vibes = await db.vibe.findMany({
    include: {
      creator: true, //says go and find the related users || select * from vibe join user on vibe.creator.id == user.id.
    },
  });
  const lastVibeId = vibes[vibes.length - 1].id;
  const selectedVibeId = vibeId ? Number(vibeId) : vibes[vibes.length - 1].id;
  return (
    <div className=" flex flex-col items-center md:items-start md:grid md:grid-cols-[1fr_3fr] gap-8 p-1 h-full w-full">
      <div className="flex flex-col gap-2 w-full justify-center items-center">
        <div className="h-32 flex flex-col items-center justify-center gap-3">
          <h2>All vibes around the git</h2>
          <VibesSearchBox />
        </div>

        <div className="w-full h-96 md:h-[29vw] overflow-y-auto">
          <VibesList vibes={vibes} />
        </div>
      </div>
      <VibeCard id={selectedVibeId} />
    </div>
  );
}
