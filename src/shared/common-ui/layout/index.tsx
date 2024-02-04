import Link from 'next/link';
import React from 'react';
import { PATH } from '../../constant/path';
import { Header } from './header';

interface indexProps extends React.PropsWithChildren {}

const Layout = ({ children }: indexProps) => {
  return (
    <div className="">
      <div className="">
        <Header />
        {/* 왼쪽 선 스타일 */}
        <div className="h-full min-h-screen w-8 fixed-left bg-primary-400 invisible md:visible"></div>
      </div>
      {/* 레이아웃들을 피하는 스타일 */}
      <div className=" h-64"></div>
      <div className=" px-0 md:px-8">{children}</div>
    </div>
  );
};

export default Layout;
