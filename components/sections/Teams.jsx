import React from "react";
import Link from "next/link";

export const Teams = ({ data }) => {
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
    <div className="w-full max-w-[90rem] mx-auto">
      <h2 className="text-center tracking-tighter font-extrabold text-5xl mt-20 text-gray-800">
        Meet the Teams
      </h2>
      <div className="flex flex-wrap justify-center w-full mx-auto my-10 hover: overflow-hidden">
        {data.teams.map((team) => {
          return (
            <Link key={team.teamID} href={`/teams/${team.slug}`}>
              <a>
                <div className="cursor-pointer flex flex-col w-80 h-80 justify-end text-center shadow-lg border border-gray-200 m-5 rounded-xl hover:scale-110 hover:bg-gray-100 hover:border-blue-500 hover:shadow-xl duration-100">
                  <span className="flex-grow flex items-center justify-center text-8xl">
                    {emojiDict[team.teamID]}
                  </span>
                  <a className="text-xl font-extrabold tracking-tight text-gray-800 capitalize">
                    {team.teamName}
                  </a>
                  <a className="text-sm text-gray-600 mt-1 mb-5 capitalize">
                    Facilitator: {team.facilitator.toLowerCase()}
                  </a>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
