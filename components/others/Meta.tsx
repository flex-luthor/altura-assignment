import Head from "next/head";
import React from "react";

export const Meta = ({ title = "Altura Assignment" }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.svg" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
  );
};
