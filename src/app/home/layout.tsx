import React, { FC, JSX } from "react";

interface HomeLayoutProps {
  children: JSX.Element;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-fit">
      <div className="overflow-auto w-full h-[calc(100vh-60px)] p-5">{children}</div>
    </div>
  );
};

export default HomeLayout;
