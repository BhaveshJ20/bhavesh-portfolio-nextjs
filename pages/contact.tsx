import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Bhavesh J20</title>
        <meta name="description" content="Get in touch with Bhavesh J20 - Senior UI/UX & Product Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
