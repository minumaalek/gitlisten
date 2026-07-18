"use client";
import EmojisDropdown from "./emojis-dropdown";
import { useState, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function VibesSearchBox() {
  const [emoji, setEmoji] = useState("👌");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchRef = useRef<HTMLInputElement>(null);

  const addQuery = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("emoji", emoji);
    params.set("vibe", searchRef.current?.value);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex bg-gray-100 rounded-full w-7/8">
      <div className=" left-12">
        <EmojisDropdown value={emoji} onChange={setEmoji} />
      </div>
      <div className=" flex items-center justify-between overflow-hidden">
        <input
          ref={searchRef}
          placeholder="Search..."
          type="text"
          className="rounded-r-none focus:bg-transparent w-1/2"
        />
        <button
          className=" right-2 secondary flex justify-center items-center"
          onClick={addQuery}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 stroke-black stroke-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
