'use client';

import Link from 'next/link';
import { PATH } from '../../constant/path';

export const Header = () => {
  return (
    <div className=" w-screen z-10 bg-background fixed-top-left">
      <div className="w-full h-64 flex ">
        <div className=" flex items-center justify-center px-12">
          <div className=" text-primary-400 font-header-2 text-header-2 leading-header-2">
            <Link href={PATH.root}>xion</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
