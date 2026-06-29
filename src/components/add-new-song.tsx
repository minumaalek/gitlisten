"use client";
import { useModal } from "@/contexts/modal";

export default function AddNewSong() {
  const { openModal } = useModal();
  const newButtonHandler = () => {
    openModal(
      <form action="">
        <div className="size-60 md:size-96 bg-white shadowed rounded-2xl border-2 border-gray-300 flex flex-col items-center justify-center p-5 gap-3">
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
    <button onClick={newButtonHandler} className="secondary">
      New
    </button>
  );
}
