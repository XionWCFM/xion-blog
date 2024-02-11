'use client';

import Link from 'next/link';
import { useScrollDirection } from '@/src/shared/hook/use-scroll-direction';
import { PATH } from '@/src/shared/constant/internal/route-path';
import { DarkModeButton } from '@/src/features/darkmode';
import { useSideBar } from '@/src/shared/store/side-bar-store';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export const Header = () => {
  const scrollDirection = useScrollDirection();
  const { toggleSideBar } = useSideBar();
  const shouldHiding =
    scrollDirection === 'down' ? '-translate-y-[64px]' : 'translate-y-0';
  return (
    <header
      className={`transition-all  duration-300 border-foreground w-full ${shouldHiding}`}
    >
      <div className="w-full h-64 flex justify-between items-center">
        <div className=" flex items-center justify-center gap-x-16 ">
          <div className=" text-center flex gap-x-8 justify-center items-center text-foreground font-header-2 text-header-2 leading-header-2">
            <Link href={PATH.root}>xion</Link>
          </div>
        </div>
        <div className=" flex gap-x-16">
          <DarkModeButton />
          <HamburgerMenuIcon
            className=" cursor-pointer"
            onClick={() => toggleSideBar()}
          />
        </div>
      </div>
    </header>
  );
};
