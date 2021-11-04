import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import Hero from "components/sections/Hero";
import Teams from "components/sections/Teams";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Cybergence</title>
        <meta
          name="description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`Cybergence`} />
        <meta property="og:site_name" content="Cybergence" />
        <meta property="og:url" content="https://cybergence.vercel.app/" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:type" content="website" />
        <meta name="image" content="/photos/sc_0.png" />
        <meta property="og:image" content="/photos/sc_0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Cybergence" />
        <meta name="twitter:title" content={`Cybergence`} />
        <meta
          name="twitter:description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <meta name="twitter:image" content="/photos/sc_0.png" />
      </Head>

      <main className="flex-grow h-full">
        <Hero />
        <Teams data={data} />
      </main>
    </>
  );
}

import fetchData from "../data/fetchData";
export const getStaticProps = async (context) => {
  const data = await fetchData();
  return {
    props: {
      data: data,
    },
  };
};
