import Head from "next/head";
import Image from "next/image";
import { PropsWithChildren } from "react";
import Background from "./Background";
import { Meta } from "../others/Meta";
import { Nav } from "./Nav";

export const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen bg-black pt-20">
      <Meta />
      <Nav />
      <Background />
      {props.children}
    </div>
  );
};
