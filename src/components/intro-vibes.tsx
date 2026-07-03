import Link from "next/link";
import VibesList from "./vibes-list";
export default function IntroVibes({ title }) {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-between items-center w-3/4">
          <Link href={"/vibes"}>
            <h2>{title} vibes</h2>
          </Link>
        </div>
        <div className="h-60 overflow-y-auto">
          <VibesList />
        </div>
      </div>
    </>
  );
}
