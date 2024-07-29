import React, { ReactNode } from "react";

const LinkText = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <span className="cursor-pointer text-slate-100 hover:text-lime-400">
        {children}
      </span>
    </>
  );
};

export default LinkText;
