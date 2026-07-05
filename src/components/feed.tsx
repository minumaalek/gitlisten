import AddNewVibe from "./add-new-vibe";
export default function Feed() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-2/3 p-2 md:border-2 md:border-(--primaryColor) rounded-full flex justify-between">
        <h3 className="invisible md:visible">Add a vibe to listen!</h3>
        <AddNewVibe />
      </div>
      <div className=" w-2/3 p-2 h-60">
        <h3 className="">New developers joined</h3>
      </div>
    </div>
  );
}
