'use client';

import Link from 'next/link';
import { PATH } from '../../constant/path';
import { DarkModeButton } from '../darkmode/dark-mode-button';
import { Input } from '../input';

export const Header = () => {
  return (
    <div className=" w-screen z-10 bg-background fixed-top-left">
      <div className=" h-32 w-full bg-gray-200"></div>
      <div className="w-full h-64 flex justify-between pr-24">
        <div className=" flex items-center justify-center px-12 gap-x-16 ">
          <div className=" text-primary-400 font-header-2 text-header-2 leading-header-2">
            <Link href={PATH.root}>xion</Link>
          </div>

          <div className="">
            <form action="">
              <Input className=" h-32 w-128 md:w-full" />
            </form>
          </div>
        </div>
        <DarkModeButton />
      </div>
    </div>
  );
};
