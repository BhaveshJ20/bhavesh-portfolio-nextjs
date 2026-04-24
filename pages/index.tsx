import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Bhavesh J20 - Portfolio</title>
        <meta name="description" content="Bhavesh J20 - Full Stack Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
