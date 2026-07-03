"use client";
import { useModal } from "@/contexts/modal";

export default function AddNewSong() {
  const { openModal } = useModal();
  const newButtonHandler = () => {
    openModal(
      <form action="">
        <div className="flex flex-col size-full items-center justify-center gap-3">
          <h2>New vibe!</h2>
          <input type="text" placeholder="Short explanation" />
          <textarea placeholder="description" />
          <input type="text" placeholder="Embed" />
          <button className="primary">create</button>
        </div>
      </form>,
    );
  };
  return (
    <button
      onClick={newButtonHandler}
      className="primary fixed md:static rounded-full size-16 md:w-20 md:h-8 bottom-5 right-5 shadow-sm md:shadow-none shadow-black"
    >
      Add
    </button>
  );
}
