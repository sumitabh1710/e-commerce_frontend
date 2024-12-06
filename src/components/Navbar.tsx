"use client";

import React from "react";
import cartIcon from "../assets/cart_icon.svg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const count: number = 3;

  return (
    <div className="h-[60px] w-full bg-[#A8D5E3] shadow-lg p-2">
      <div className="flex items-center justify-between h-full w-full px-4">
        <p className="font-serif text-[#1C274C] font-semibold text-xl">
          e - Commerce
        </p>
        <div
          className="cursor-pointer relative"
          onClick={() => {
            router.push("/cart");
          }}
        >
          <div className="bg-[#FF78AC] py-[2px] px-[6px] -right-2 -top-2 absolute text-white font-semibold text-[9px] rounded-full">
            {count}
          </div>
          <img src={cartIcon.src} className="w-7" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
