import React from "react";
import AddressPill from "../atoms/AddressPill";

interface ModalProps {
  image?: string;
  id?: string;
  title?: string;
  address?: string;
  description?: string;
  closeModal: () => void;
}

const Modal = ({
  image,
  id,
  title,
  address,
  description,
  closeModal,
}: ModalProps) => {
  const addDefaultSrc = (e: { target: { src: string } }) => {
    e.target.src = "/placeholder.webp";
  };

  return (
    <div
      className="fixed w-screen h-screen top-0 left-0 text-white flex items-center backdrop-blur-xl justify-center z-50 px-10"
      onClick={closeModal}
    >
      <div
        className="w-full h-full max-w-[1000px] max-h-[600px] flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full p-4 bg-midnight-700/20 border border-midnight-700/60 backdrop-blur-xl rounded-lg text-white z-10 flex flex-col md:flex-row">
          <img
            className="rounded-l-lg object-cover bg-white/5 w-full md:w-1/2"
            height={400}
            onError={addDefaultSrc}
            key={id}
            src={image || "/placeholder.webp"}
          />
          <div className="p-6 rounded-r-lg bg-black/80 w-full md:w-1/2">
            <div className="flex flex-col mb-3">
              <div className="flex-grow">
                <h3 className="text-xl mb-2 font-bold">{title || "No name"}</h3>
              </div>
              <div className="mr-3">
                <AddressPill
                  address={id}
                  icon="/contract-icon.svg"
                  fullLength={true}
                />
                <AddressPill
                  address={address}
                  variant="dark"
                  icon="/person.svg"
                  fullLength={true}
                />
              </div>
            </div>
            <p className="text-sm text-white/50 text-ellipsis text-ellipsis overflow-x-hidden overflow-y-scroll h-[200px]">
              {description ? description : "No description"}
            </p>
            <a
              href={`https://opensea.io/assets/ethereum/${address}/${parseInt(
                id || ""
              )}`}
              target="_blank"
            >
              <button className="mt-16 bg-midnight-700 text-white px-6 py-4 font-bold w-full">
                BUY ON OPENSEA
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
