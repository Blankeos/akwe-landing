import React from "react";
import Link from "next/Link";

export const Teams = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center w-4/5 mx-auto my-10 hover:">
      {data.teams.map((team) => {
        return (
          <Link key={team.teamID} href={`/teams/${team.slug}`}>
            <div className="flex flex-col w-80 h-80 justify-end text-center shadow-lg border border-gray-200 m-5 rounded-xl hover:bg-gray-100 hover:border-blue-500">
              <a className="text-xl font-bold">{team.teamName}</a>
              <a className="text-xs text-gray-600 mb-5">
                FACILITATOR: {team.facilitator}
              </a>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Teams;
