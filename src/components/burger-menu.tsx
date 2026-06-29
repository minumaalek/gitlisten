"use client";
import { useState } from "react";
export function BurgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const openHandler = () => {
    setOpenMenu((prev) => !prev);
    setMenuVisible(true);
  };
  const closeHandler = () => {
    setMenuVisible(false);
    let time = setTimeout(() => {
      setOpenMenu(false);
    }, 500);
  };

  return (
    <>
      <div className="flex flex-col gap-1 cursor-pointer" onClick={openHandler}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="border-2 border-white w-6" />
        ))}
      </div>
      <div
        className={`z-50 w-screen h-screen inset-0 absolute blurring ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"}  `}
        onClick={closeHandler}
      >
        <div
          className={`md:w-1/3 w-3/4  ${menuVisible ? "translate-x-0" : "-translate-x-full"} transition-all duration-500 h-full bg-white left-0 top-0`}
        ></div>
      </div>
    </>
  );
}
