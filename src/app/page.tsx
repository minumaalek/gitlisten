import { db } from "@/db";
export const metadata = {
  title: "Gitlisten",
  description: "What songs are git people listening to? ",
};
import { auth } from "@/auth";
import IntroVibes from "@/components/intro-vibes";
import Feed from "@/components/feed";
import NewVibeForm from "@/components/new-vibe-form";
export default async function Home() {
  const vibes = await db.vibe.findMany({
    include: {
      creator: true, //says go and find the related users || select * from vibe join user on vibe.creator.id == user.id.
    },
  });
  const session = await auth();

  return (
    <div className="grid grid-rows-3 md:grid-cols-2 p-3 ">
      <div className="flex flex-col md:flex-row gap-2">
        <IntroVibes title="New" vibes={vibes} />
        <IntroVibes title="Top" vibes={vibes} />
      </div>
      <div className=" md:ml-10">
        <Feed />
      </div>
    </div>
  );
}
