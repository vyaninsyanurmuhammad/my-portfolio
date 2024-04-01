import React, { ReactNode } from "react";

const LinkText = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <a className="cursor-pointer text-slate-100 hover:text-lime-400" href={href}>
       {children}
      </a>
    </>
  );
};

export default LinkText;
