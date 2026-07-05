"use client";
import { useModal } from "@/contexts/modal";
import { useActionState, useState } from "react";
import NewVibeForm from "./new-vibe-form";
export default function AddNewVibe() {
  const { openModal } = useModal();
  const newButtonHandler = () => {
    openModal(<NewVibeForm />);
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
