import React from 'react';
import { Header } from '../../header/ui/header';
import { Footer } from '../../footer/ui/footer';

interface indexProps extends React.PropsWithChildren {}

const Layout = ({ children }: indexProps) => {
  return (
    <div className="px-16 md:px-0 w-screen">
      <div className=" px-0 md:px-32">
        <Header />
      </div>
      <div className=" h-64"></div>
      <div className=" px-0 md:px-32 flex">
        <div className=" w-full min-h-[calc(100vh-64px-256px-24px-64px)]">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
