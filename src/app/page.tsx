export const metadata = {
  title: "Gitlisten",
  description: "What songs are git people listening to? ",
};

import AddNewSong from "@/components/add-new-song";
export default function Home() {
  return (
    <div className="grid grid-rows-3 md:grid-cols-3 p-3 mt-10 gap-2">
      <div className="flex flex-col border-r-2 border-gray-400  overflow-y-auto">
        <div className="flex justify-between items-center w-3/4">
          <h3>Top songs</h3>
          <AddNewSong />
        </div>
      </div>
      <div>
        <h2>Home</h2>
        <h3>Feed</h3>
      </div>
      <div>
        <h3>Our new services</h3>
      </div>
    </div>
  );
}
