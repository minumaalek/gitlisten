import VibesList from "@/components/vibes-list";
import Link from "next/link";
import EmojisDropdown from "@/components/emojis-dropdown";
import VibeCard from "@/components/vibe-card";
import VibesSearchBox from "@/components/vibes-search-box";

export default function Vibe() {
  return (
    <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-[1fr_3fr] p-10 h-full w-full">
      <div className="flex flex-col gap-2">
        <h2>All vibes around the git</h2>
        <VibesSearchBox />
        <VibesList />
      </div>
      <VibeCard />
    </div>
  );
}
