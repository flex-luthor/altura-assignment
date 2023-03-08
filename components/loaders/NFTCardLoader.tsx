import React from "react";
import Tilt from "react-tilt";

const NFTCardLoader = () => {
  return (
    <Tilt
      className="Tilt flex items-center cursor-pointer"
      options={{ speed: 4 }}
    >
      <div className="w-full p-4 bg-midnight-700/20 border border-midnight-700/60 backdrop-blur-xl rounded-lg text-white z-10 flex flex-col animate-pulse">
        <img
          className="rounded-lg h-64 object-cover bg-white/5 w-full animate-pulse"
          height={400}
          src={"/placeholder.webp"}
        />
        <div className="p-3 mt-4 rounded-lg bg-black/20">
          <div className="flex flex-col mb-3">
            <div className="flex-grow">
              <h3 className="text-xl truncate mb-2 font-bold" />
            </div>
            <div className="mr-3">
              <span className="bg-midnight-700/30 rounded-full p-1 px-3 text-sm flex mb-2 h-5 animate-pulse" />
              <span className="bg-white/20 rounded-full p-1 px-3 text-sm flex mb-2 h-5 animate-pulse" />
            </div>
          </div>
          <p className="text-sm text-white/50 text-clip bg-white/20 h-10 mr-4 rounded-lg animate-pulse" />
        </div>
      </div>
    </Tilt>
  );
};

export default NFTCardLoader;
