export const metadata = {
  title: "Gitlisten",
  description: "What songs are git people listening to? ",
};
import { auth } from "@/auth";
import IntroVibes from "@/components/intro-vibes";
import Feed from "@/components/feed";
import NewVibeForm from "@/components/new-vibe-form";
export default async function Home() {
  const session = await auth();

  return (
    <div className="grid grid-rows-3 md:grid-cols-3 p-3  gap-2 ">
      <IntroVibes title="New" />
      <IntroVibes title="Top" />
      <Feed />
    </div>
  );
}
