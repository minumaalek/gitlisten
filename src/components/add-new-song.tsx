"use client";
import { useModal } from "@/contexts/modal";

export default function AddNewSong() {
  const { openModal } = useModal();
  const newButtonHandler = () => {
    openModal(
      <div className="size-80 md:size-96 bg-white shadow-2xl shadow-black rounded-2xl border-2 border-gray-300">
        <form action="">
          <input type="text" />
          hh
        </form>
      </div>,
    );
  };
  return (
    <button onClick={newButtonHandler} className="secondary">
      New
    </button>
  );
}
