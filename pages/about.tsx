import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Bhavesh J20</title>
        <meta name="description" content="Learn more about Bhavesh J20 - Senior UI/UX & Product Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
