"use client";
import { useState } from "react";
import { useModal } from "@/contexts/modal";
import VibesList from "./vibes-list";
export default function UserPreview({ username }: string) {
  const [profileVisible, setProfileVisible] = useState(false);
  const { openModal } = useModal();
  const clickHandler = () => {
    openModal(
      <div className=" w-full flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <div className="size-12 bg-blue-400 rounded-full"></div>
          <div className="flex flex-col gap-1">
            <span>username</span>
            <button className="secondary w-full">view on github</button>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 w-full flex flex-col items-center py-3">
          <div className="overflow-y-auto h-56 md:h-72 w-full">
            <VibesList />
          </div>
        </div>
      </div>,
    );
  };
  return (
    <div onClick={clickHandler}>
      <i className="text-sm">{username}</i>
    </div>
  );
}
