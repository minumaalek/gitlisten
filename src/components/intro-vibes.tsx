import Link from "next/link";
import VibesList from "./vibes-list";
export default function IntroVibes({ title, vibes }) {
  return (
    <>
      <div className="flex flex-col items-start justify-start">
        <div className="">
          <Link href={"/vibes"}>
            <h2>{title} vibes</h2>
          </Link>
        </div>
        <div className="h-60 overflow-y-auto">
          <VibesList vibes={vibes} />
        </div>
      </div>
    </>
  );
}
