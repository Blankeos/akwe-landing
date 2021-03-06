import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Head from "next/head";

function TeamPage({ team, members }) {
  const router = useRouter();

  const emojiDict = {
    0: "๐พ",
    1: "๐ฆ",
    2: "๐ค",
    3: "๐ญ",
    4: "๐ค",
    5: "๐งถ",
    6: "๐ฎ",
    7: "๐จ",
    8: "โจ",
    9: "๐ฅ",
  };

  return (
    <>
      <Head>
        <title>Cybergence | {team.teamName}</title>
        <meta
          name="description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`Cybergence | ${team.teamName}`} />
        <meta property="og:site_name" content="Cybergence" />
        <meta property="og:url" content="https://cybergence.vercel.app/" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:type" content="website" />
        <meta name="image" content="/photos/sc_0.png" />
        <meta property="og:image" content="/photos/sc_0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Cybergence" />
        <meta name="twitter:title" content={`Cybergence | ${team.teamName}`} />
        <meta
          name="twitter:description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <meta name="twitter:image" content="/photos/sc_0.png" />
      </Head>
      <div className="flex justify-center mt-10">
        <div className="w-[45rem]">
          <FaChevronLeft
            className="cursor-pointer ml-3 md:ml-0"
            onClick={() => router.push("/", { scroll: false })}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-10 mt-14">
        <span className="flex-grow flex items-center justify-center text-8xl">
          {emojiDict[team.teamID]}
        </span>
        <h1 className="font-black tracking-tighter text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#feabf1] to-[#033f8f] filter drop-shadow-sm px-2">
          {team.teamName}
        </h1>
        <p className="text-center">
          Facilitator <br /> {team.facilitator}
        </p>
        <div className="flex flex-col flex-grow w-full md:w-[45rem] mb-20">
          <span className="font-bold my-4 mx-3 md:mx-0">Team Members</span>
          {members.map((member) => {
            return (
              <>
                <span className="px-3 py-3 border">
                  {member.lastName}, {member.firstName}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TeamPage;

import fetchData from "../../data/fetchData";

export const getStaticPaths = async () => {
  const data = await fetchData();

  const paths = data.teams.map((team) => {
    return {
      params: { slug: team.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const data = await fetchData();
  const team = data.teams.find((team) => team.slug === slug);
  const members = data.students.filter(
    (student) => student.teamID === team.teamID
  );

  return {
    props: {
      team,
      members,
    },
  };
};
