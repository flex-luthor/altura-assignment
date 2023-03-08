import React from "react";
import AddressPill from "../atoms/AddressPill";
import Tilt from "react-tilt";

interface NFTCardProps {
  image: string;
  id: string;
  title: string;
  address: string;
  description: string;
  onClick: () => void;
}

const NFTCard = ({
  image,
  id,
  title,
  address,
  description,
  onClick,
}: NFTCardProps) => {
  const addDefaultSrc = (e: { target: { src: string } }) => {
    e.target.src = "/placeholder.webp";
  };
  return (
    <Tilt
      className="Tilt flex items-center cursor-pointer"
      options={{ speed: 4 }}
      style={{}}
    >
      <div
        onClick={onClick}
        className="w-full p-4 bg-midnight-700/20 border border-midnight-700/60 backdrop-blur-xl rounded-lg text-white z-10 flex flex-col"
      >
        <img
          className="rounded-lg h-64 object-cover bg-white/5 w-full"
          height={400}
          onError={addDefaultSrc}
          key={id}
          src={image || "/placeholder.webp"}
        />
        <div className="p-3 mt-4 rounded-lg bg-black/20">
          <div className="flex flex-col mb-3">
            <div className="flex-grow">
              <h3 className="text-xl truncate mb-2 font-bold">
                {title || "No name"}
              </h3>
            </div>
            <div className="mr-3">
              <AddressPill address={id} icon="/contract-icon.svg" />
              <AddressPill
                address={address}
                variant="dark"
                icon="/person.svg"
              />
            </div>
          </div>
          <p className="text-sm text-white/50 text-clip">
            {description && description.slice(0, 100)}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default NFTCard;
