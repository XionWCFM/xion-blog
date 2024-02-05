'use client';

import Link from 'next/link';
import { PATH } from '../../../shared/constant/path';
import { DarkModeButton } from '../../../features/darkmode/ui/dark-mode-button';

export const Header = () => {
  return (
    <div className=" w-screen z-10 bg-background fixed-top-left">
      <div className="w-full h-64 flex justify-between pr-24">
        <div className=" flex items-center justify-center px-12 gap-x-16 ">
          <div className=" text-center flex justify-center items-center text-primary-400 font-header-2 text-header-2 leading-header-2">
            <Link href={PATH.root}>xion</Link>
          </div>

          <div className=""></div>
        </div>
        <DarkModeButton />
      </div>
    </div>
  );
};
