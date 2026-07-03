export const metadata = {
  title: "Gitlisten",
  description: "What songs are git people listening to? ",
};

import IntroVibes from "@/components/intro-vibes";
import Feed from "@/components/feed";
export default function Home() {
  return (
    <div className="grid grid-rows-3 md:grid-cols-3 p-3 mt-10 gap-2">
      <IntroVibes title="New" />
      <IntroVibes title="Top" />
      <Feed />
    </div>
  );
}
