import React from "react";

interface AddressPillProps {
  address?: string;
  variant?: string;
  icon?: string;
  fullLength?: boolean;
}

const AddressPill = ({
  address = "",
  variant,
  icon,
  fullLength = false,
}: AddressPillProps) => {
  return (
    <span
      className={
        variant === "dark"
          ? "bg-white/20 rounded-full p-1 px-3 text-sm flex mb-2"
          : "bg-midnight-700/30 rounded-full p-1 px-3 text-sm flex mb-2"
      }
    >
      {icon && <img src={icon} width={12} height={12} className={"mr-1"} />}
      <p className={fullLength ? "overflow-scroll" : ""}>
        {fullLength
          ? address
          : address?.length > 32
          ? `${address.slice(0, 6)}...${address.slice(address.length - 6)}`
          : address}
      </p>
    </span>
  );
};

export default AddressPill;
