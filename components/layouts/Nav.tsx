import Image from "next/image";
import React from "react";

export const Nav = () => {
  return (
    <div className="flex justify-center fixed w-full top-0 z-20 no-scrollbar bg-black bg-opacity-20 backdrop-blur-xl border-b border-midnight-700">
      <div className="flex justify-between w-full max-w-[95%] h-20 px-4 items-center">
        <div className="flex items-center">
          <Image alt="logo" src={"/logo.svg"} width={46} height={28} />
          <h1 className="text-white text-xl font-bold">Altura Assignment</h1>
        </div>
      </div>
    </div>
  );
};
