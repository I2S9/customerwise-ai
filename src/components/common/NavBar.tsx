"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";

const NavBar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <Link href="/">
            <img src="/images/customerwise-ai.png" alt="logo" />
          </Link>
          <div className="flex items-center gap-[40px] select-none">
            <Link href="/features" passHref>
              <p className="hover:bg-[#0005370d] hover:px-4 hover:py-2 hover:rounded-[10px] cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Features
              </p>
            </Link>
            <Link href="/pricing" passHref>
              <p className="hover:bg-[#0005370d] hover:px-4 hover:py-2 hover:rounded-[10px] cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Pricing
              </p>
            </Link>
            <Link href="/start" passHref>
              <p className="hover:bg-[#0005370d] hover:px-4 hover:py-2 hover:rounded-[10px] cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Let's start
              </p>
            </Link>
            <MainButton text="Sign In" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in ${
          menu ? "bg-primary py-2" : ""
        }`}
      >
        <div className="flex justify-between mx-[10px]">
          <Link href="/">
            <img
              src="/images/customerwise-ai.png"
              alt="logo"
              className="w-[5rem]"
            />
          </Link>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="menu"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu && (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <Link href="/features" passHref>
                <p className="cursor-pointer flex items-center gap-2 font-[500] text-gray">
                  Features
                </p>
              </Link>
              <Link href="/pricing" passHref>
                <p className="cursor-pointer flex items-center gap-2 font-[500] text-gray">
                  Pricing
                </p>
              </Link>
              <Link href="/start" passHref>
                <p className="cursor-pointer flex items-center gap-2 font-[500] text-gray">
                  Let's start
                </p>
              </Link>
              <p className="cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Manifest
              </p>
              <p className="cursor-pointer flex items-center gap-2 font-[500] text-gray">
                Changelog
              </p>
              <MainButton
                text="Sign in"
                classes="bg-white text-black border-[2px] border-gray-300 shadow-lg hover:bg-white"
              />
              <Link href="/start">
                <a>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
