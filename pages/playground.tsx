import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery - Bhavesh J20</title>
        <meta name="description" content="Design gallery and visual work by Bhavesh J20" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Gallery />
      </Layout>
    </>
  );
}
