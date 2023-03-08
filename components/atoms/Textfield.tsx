import Image from "next/image";
import React from "react";

interface TextFieldProps {
  value: string;
  setValue: (arg0: any) => void;
  onSearch: () => void;
}

const Textfield = ({ value, setValue, onSearch }: TextFieldProps) => {
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") onSearch();
  };

  return (
    <div className="relative mb-3 flex w-full justify-center px-4">
      <div className="w-full max-w-[600px] relative">
        <span className="z-10 h-full leading-snug font-normal absolute left-0 text-center text-slate-300 absolute bg-transparent rounded text-base items-center w-12 pl-6 py-4 ">
          <Image
            src={"/contract-icon.svg"}
            width={48}
            height={48}
            alt="address"
          />
        </span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Your wallet address"
          className="px-14 py-3 placeholder-slate-300-semibold text-white placeholder:text-midnight-700/60 italic relative bg-black rounded-full text-xl border border-midnight-700 caret-midnight-700 shadow outline-none focus:outline-none shadow-xl shadow-midnight-700/30 w-full"
        />
        <button
          onClick={onSearch}
          className="z-10 h-full leading-snug font-normal absolute right-0 text-center text-slate-300 absolute bg-transparent rounded text-base items-center w-12 pr-6 py-4 "
        >
          <Image
            className="bg-black"
            src={"/search.svg"}
            width={48}
            height={48}
            alt="address"
          />
        </button>
      </div>
    </div>
  );
};

export default Textfield;
