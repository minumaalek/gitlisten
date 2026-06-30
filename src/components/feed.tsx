import AddNewSong from "./add-new-song";
export default function Feed() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-2/3 p-2 border-2 border-(--primaryColor) rounded-full flex justify-between">
        <h3>Add a vibe to listen!</h3>
        <AddNewSong />
      </div>
      <div className=" w-2/3 p-2 h-60">
        <h3>New developers joined:</h3>
      </div>
    </div>
  );
}
