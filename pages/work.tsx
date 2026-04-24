import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Work from "../components/Work";

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Work - Bhavesh J20</title>
        <meta name="description" content="Portfolio projects and case studies by Bhavesh J20" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Work />
      </Layout>
    </>
  );
}
