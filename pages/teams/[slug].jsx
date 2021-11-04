import React from "react";

function TeamPage({ team, members }) {
  return (
    <div>
      <h1>Welcome to {team.teamName}</h1>
      <p>team: {JSON.stringify(team)}</p>
      <p>members: {JSON.stringify(members)}</p>
    </div>
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
