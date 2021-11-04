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
