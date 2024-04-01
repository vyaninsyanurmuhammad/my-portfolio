import { ArrowUpRight } from "iconoir-react";
import React from "react";

const CardProjectArchive = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <>
      <div className="flex flex-row gap-6 group relative hover:!opacity-100 group-hover/list:opacity-50 transition-all ease-in-out">
        <div className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 bg-lime-400/10 backdrop-blur-md z-0 absolute -inset-4 rounded-xl"></div>
        <div className="bg-lime-400 h-28 z-10 w-28 shrink-0 rounded-lg"></div>
        <div className="flex flex-col z-10 gap-4">
          <div className="flex flex-row gap-3 items-end group-hover:items-start transition-all ease-in-out">
            <h4 className="text-white font-medium group-hover:text-lime-400">
              {title ?? "-"}
            </h4>
            <ArrowUpRight className="w-4 h-4 text-slate-100 group-hover:text-lime-400 group-hover:scale-125 group-hover:stroke-2 transition-all ease-in-out" />
          </div>

          <p className="text-slate-400 group-hover:text-slate-100">
            {description ?? "-"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardProjectArchive;
