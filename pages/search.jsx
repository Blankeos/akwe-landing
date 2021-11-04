import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Fuse from "fuse.js";

function SearchPage({ data }) {
  const [filteredStudents, setFilteredStudents] = useState(data.students);
  const [nameInput, setNameInput] = useState("");

  const fuse = new Fuse(data.students, {
    keys: ["lastName", "firstName"],
    threshold: 0.4,
  });

  function fuzzySearch(value) {
    if (value.length <= 0) {
      return data.students.map((student) => ({ item: student }));
    }

    return fuse.search(value);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFilteredStudents(fuzzySearch(nameInput));
    }, 800);

    return () => {
      clearTimeout(timeOut);
    };
  }, [nameInput]);

  function handleNameInputChange(e) {
    setNameInput(e.target.value);
  }
  return (
    <>
      <Head>
        <title>Cybergence | Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-5xl w-full mx-auto py-10 px-10 overflow-hidden flex-grow flex flex-col space-y-5">
        <h1 className="font-extrabold tracking-tighter text-2xl text-gray-800">
          🔍 Student Search
        </h1>
        <input
          autofocus
          className="border p-2"
          placeholder="🔍 Write your name and see where you belong..."
          onChange={handleNameInputChange}
          value={nameInput}
        />
        <div className="grid grid-cols-[2fr,1fr] font-bold">
          <span>Name</span>
          <span>Team</span>
        </div>
        <div className="grid grid-cols-[2fr,1fr] text-gray-700 overflow-hidden border">
          {filteredStudents.map((student) => {
            return (
              <>
                <span className="px-3 py-3 border">
                  {student.item && student.item.lastName},{" "}
                  {student.item && student.item.firstName}
                </span>
                {student.item && (
                  <TeamBadge
                    teamID={student.item.teamID}
                    teamsList={data.teams}
                  />
                )}
              </>
            );
          })}
        </div>
        <div></div>
        {/* <p>{JSON.stringify(filteredStudents)}</p> */}
      </main>
    </>
  );
}
function TeamBadge({ teamID, teamsList }) {
  const colorDict = {
    0: "#DC2626",
    1: "#7C3AED",
    2: "#F472B6",
    3: "#1D4ED8",
    4: "#A78BFA",
    5: "#059669",
    6: "#EC4899",
    7: "#93C5FD",
    8: "#FBBF24",
    9: "#D97706",
  };

  const team = teamsList.find((team) => team.teamID === teamID);
  return (
    <span className="px-3 py-3 border text-sm flex items-center">
      <Link href={`/teams/${team.slug}`}>
        <a
          style={{
            backgroundColor: colorDict[teamID],
          }}
          className="p-1 px-2.5 truncate rounded-full text-xs text-white"
        >
          {team.teamName}
        </a>
      </Link>
    </span>
  );
}
// function TeamBadge({ teamID, teamsList }) {
//   return (
//     <span className="text-sm">
//       <span className="bg-blue-400 p-1 px-2 rounded-full text-white">
//         {teamsList.find((team) => team.teamID === teamID).teamName}
//       </span>
//     </span>
//   );
// }

export default SearchPage;

import fetchData from "../data/fetchData";
export const getStaticProps = async (context) => {
  const data = await fetchData();
  return {
    props: {
      data: data,
    },
  };
};
