import React from "react";
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/router'

function TeamPage({ team, members }) {
  const router = useRouter()

  const emojiDict = {
    0: "👾",
    1: "🦄",
    2: "🤖",
    3: "🔭",
    4: "🤑",
    5: "🧶",
    6: "🔮",
    7: "💨",
    8: "✨",
    9: "🔥",
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-[45rem]">
          <FaChevronLeft className="cursor-pointer" onClick={() => router.back()}/>
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
