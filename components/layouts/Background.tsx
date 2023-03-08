import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <div className="top-0 right-0 w-[1000px] h-screen fixed overflow-hidden opacity-50">
        <Image
          src={"/background.webp"}
          alt="background"
          width={2000}
          height={2000}
          className="absolute -top-32 -right-96 max-w-[1200px] max-h-[1200px]"
        />
      </div>
      <div className=" top-0 left-0 w-[1000px] h-screen fixed  overflow-hidden opacity-50">
        <Image
          src={"/background.webp"}
          alt="background"
          width={2000}
          height={2000}
          className="absolute -top-0 -left-[600px] max-w-[1400px] max-h-[1400px] rotate-180"
        />
      </div>
    </div>
  );
};

export default Background;
