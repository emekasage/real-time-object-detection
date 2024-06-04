"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showTimer, setShowTimer] = useState(false);
  const toggleTimerVisiblity = () => {
    setShowTimer(showTimer ? false : true);
  };

  return (
    <header className="bg-white py-6 px-16 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image
            priority
            src="/header_logo.svg"
            alt="Header Logo"
            width={63}
            height={62}
            className="w-full"
          />
        </Link>
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-medium">Frontend Developer</h1>
          <p className="text-sm text-neutral-50">Skill assessment test</p>
        </div>
      </div>
      <div className="flex items-center space-x-2.5">
        <div className="flex items-center space-x-2 py-2.5 px-6 bg-primary-200 rounded-lg">
          <div className="w-6 h-6 bg-primary-75 rounded-full p-1">
            <Image
              priority
              src="/timer-start.svg"
              alt="Timer"
              width={16}
              height={16}
              className="w-full"
            />
          </div>
          <p className="text-lg font-bold text-primary-50">
            {showTimer ? "29:10" : "--:--"}{" "}
            <span className="text-sm font-medium">time left</span>
          </p>
        </div>
        <div
          className="bg-primary-75 w-7 h-7 rounded-full p-1 cursor-pointer"
          onClick={toggleTimerVisiblity}
        >
          {showTimer ? (
            <Image
              priority
              src="/eye.svg"
              alt="Timer"
              width={20}
              height={20}
              className="w-full"
            />
          ) : (
            <Image
              priority
              src="/eye-slash.svg"
              alt="Timer"
              width={20}
              height={20}
              className="w-full"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
