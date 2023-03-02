import React from "react";
import { Link } from "react-router-dom";

const Index = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex w-full gap-5" ref={ref}>
      <Link
        to={"/multi-step"}
        className="transition-color flex h-fit w-1/6 justify-center rounded bg-white p-2 shadow-sm duration-500 hover:bg-slate-200"
      >
        Multi Step
      </Link>
      <Link
        to={"/email-box"}
        className="transition-color flex h-fit w-1/6 justify-center rounded bg-white p-2 shadow-sm duration-500 hover:bg-slate-200"
      >
        Email Box
      </Link>
      <Link
        to={"/carousel"}
        className="transition-color flex h-fit w-1/6 justify-center rounded bg-white p-2 shadow-sm duration-500 hover:bg-slate-200"
      >
        Carousel
      </Link>
    </div>
  );
});

export default Index;
