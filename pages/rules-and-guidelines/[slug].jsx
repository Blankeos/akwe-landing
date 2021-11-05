import React from "react";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Link from "next/link";

function RulesAndGuideLinesPage({
  data,
  content,
  slug,
  rulesAndGuidelinesList,
}) {
  return (
    <>
      <Head>
        <title>Cybergence | Rules and Guidelines</title>
        <meta
          name="description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={`Cybergence | Rules and Guidelines`}
        />
        <meta property="og:site_name" content="Cybergence" />
        <meta property="og:url" content="https://cybergence.vercel.app/" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:type" content="website" />
        <meta name="image" content="/photos/sc_0.png" />
        <meta property="og:image" content="/photos/sc_0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Cybergence" />
        <meta
          name="twitter:title"
          content={`Cybergence | Rules and Guidelines`}
        />
        <meta
          name="twitter:description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <meta name="twitter:image" content="/photos/sc_0.png" />
      </Head>
      <main className="max-w-5xl w-full mx-auto pt-10 pb-28 px-10 overflow-hidden flex-grow flex flex-col space-y-10">
        <div>
          <h3 className="font-bold tracking-tighter text-xl pb-2">Events</h3>
          <div className="flex gap-x-8 gap-y-3 flex-wrap text-sm">
            {rulesAndGuidelinesList.map((rag, i) => {
              return <EventItem ragItem={rag} key={i} />;
            })}
          </div>
        </div>
        <div className="bg-indigo-200 h-0.5 w-full"></div>
        <h1 className="font-black tracking-tighter text-4xl text-gray-900">
          Rules and Guidelines for{" "}
          <span className="text-indigo-500">{data.title}</span>
        </h1>
        <div className="prose">
          <MDXRemote {...content} components={<h2>Hello!</h2>} />
        </div>
      </main>
    </>
  );
}

function EventItem({ ragItem }) {
  const router = useRouter();
  return (
    <Link href={ragItem.slug}>
      <a
        className={`${
          router.query.slug === ragItem.slug
            ? "font-medium bg-indigo-500 text-white"
            : "bg-transparent text-gray-800"
        }  border border-indigo-500 p-2 px-5`}
      >
        {ragItem.data.title}
      </a>
    </Link>
  );
}

export default RulesAndGuideLinesPage;

import fetchRulesAndGuidelines from "data/fetchRulesAndGuidelines";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const ragList = fetchRulesAndGuidelines(); // rag means Rules and Guidelines

  // Each rag contains {data, content, slug}
  const paths = ragList.map((rag) => {
    return {
      params: { slug: rag.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slugReceived = context.params.slug;
  const ragList = fetchRulesAndGuidelines();
  const rag = ragList.find((rag) => rag.slug === slugReceived);
  const { data, content, slug } = rag;

  const mdxSource = await serialize(content);

  console.log(data, content, slug);
  return {
    props: {
      data,
      content: mdxSource,
      slug,
      rulesAndGuidelinesList: ragList,
    },
  };
};
// export const getStaticProps = async (context) => {
//   const slug = context.params.slug;
//   const data = await fetchData();
//   const team = data.teams.find((team) => team.slug === slug);
//   const members = data.students.filter(
//     (student) => student.teamID === team.teamID
//   );

//   return {
//     props: {
//       team,
//       members,
//     },
//   };
// };
