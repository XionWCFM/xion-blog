import React from 'react';
import { Header } from '../../header/ui/header';
import { Footer } from '../../footer/ui/footer';

interface indexProps extends React.PropsWithChildren {}

const Layout = ({ children }: indexProps) => {
  return (
    <div className="">
      <div className="">
        <Header />
        {/* 왼쪽 선 스타일 */}
        <div className=" h-full w-8 fixed-left bg-primary-400 invisible md:visible"></div>
      </div>
      {/* 레이아웃들을 피하는 스타일 */}
      <div className=" h-64"></div>
      <div className=" px-0 md:pl-8 flex">
        <div className=" min-h-[calc(100vh-64px-256px)]">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
