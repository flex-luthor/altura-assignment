import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-2 h-24 w-full items-center justify-center text-white bg-black bg-opacity-40 backdrop-blur-xl py-20 border-t border-midnight-700">
      Made by
      <a
        className="flex items-center justify-center ml-1 text-midnight-100 font-bold"
        href="https://www.linkedin.com/in/arpitbhardwajreact/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arpit Bhardwaj
      </a>
    </footer>
  );
};

export default Footer;
