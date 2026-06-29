import VibesList from "@/components/vibes-list";
import Link from "next/link";
import EmojisDropdown from "@/components/emojis-dropdown";
import VibeCard from "@/components/vibe-card";

export default function Vibe() {
  return (
    <div className="grid grid-cols-[1fr_3fr] p-10 h-full">
      <div className="flex flex-col gap-2">
        <h2>All vibes around the git</h2>
        <div className="">
          <div className="absolute left-12 z-10">
            <EmojisDropdown />
          </div>
          <div className="rounded-full w-72 bg-gray-100 flex items-center justify-between overflow-hidden relative">
            <input type="text" className="rounded-r-none w-full" />
            <button className="absolute right-2 secondary flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-black stroke-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <VibesList />
      </div>
      <VibeCard />
    </div>
  );
}
