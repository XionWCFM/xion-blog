'use client';

import { useSideBar } from '@/src/shared/store/side-bar-store';

export const SideBar = () => {
  const { isSideBarOpen } = useSideBar();
  return isSideBarOpen ? (
    <nav className=" flex flex-col fixed-top-right bg-primary-400 "></nav>
  ) : null;
};
