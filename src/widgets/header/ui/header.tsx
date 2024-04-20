"use client";

import Link from "next/link";
import { DarkModeButton } from "src/features/darkmode";
import { useScrollDirection } from "src/shared/hook/use-scroll-direction";

import { PATH } from "~/shared/constant/route/route-path";

export const Header = () => {
  const scrollDirection = useScrollDirection();
  const shouldHiding = scrollDirection === "down" ? "-translate-y-[64px]" : "translate-y-0";

  return (
    <header className={`transition-all  duration-300 border-foreground w-full ${shouldHiding}`}>
      <div className="w-full h-64 flex justify-between items-center">
        <div className=" flex items-center justify-center gap-x-16 ">
          <div className=" text-center flex gap-x-8 justify-center items-center text-title-6 font-medium leading-normal">
            <Link href={PATH.root}>xion</Link>
          </div>
        </div>
        <div className=" flex gap-x-16">
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
};
