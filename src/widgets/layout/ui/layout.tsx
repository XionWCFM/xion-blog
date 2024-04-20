import React from "react";

import { Footer } from "../../footer/ui/footer";
import { Header } from "../../header/ui/header";

interface indexProps extends React.PropsWithChildren {}

const Layout = ({ children }: indexProps) => {
  return (
    <div className=" px-16 md:px-0 w-screen flex flex-col justify-center items-center">
      <div className=" px-0  w-full md:w-[768px] lg:w-1024 ">
        <Header />
      </div>
      <div className=" h-64"></div>
      <div className=" px-0 md:px-32 flex">
        <div className=" w-full md:w-[768px] lg:w-1024 min-h-[calc(100vh-64px-256px-24px-64px)]">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
