"use client";
import Icon from "./icon";
import Image from "next/image";
import { useState } from "react";
import { signOut } from "@/actions";

export default function Profile({ image, name, email }) {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div>
      <Icon>
        <Image
          src={image}
          width={40}
          height={40}
          alt="avatar"
          className="rounded-full"
          onClick={() => setOpenProfile((prev) => !prev)}
        />
      </Icon>

      {openProfile && (
        <div
          className="inset-0 w-screen h-screen absolute"
          onClick={() => setOpenProfile(false)}
        >
          <div
            className={`absolute top-16 z-20 right-2 h-22 bg-white shadow-md rounded-xl shadow-black flex flex-col p-3 items-center justify-between `}
          >
            <div>
              <span>{name}</span>
              <span> | </span>
              <span>{email}</span>
            </div>
            <div
              className="w-full flex justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="primary">Profile</button>
              <form action={signOut}>
                <button type="submit" className="secondary">
                  sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
