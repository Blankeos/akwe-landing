import React from "react";
import Head from "next/head";

function AboutPage() {
  return (
    <>
      <Head>
        <title>Cybergence | About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-5xl w-full mx-auto py-10 px-10 overflow-hidden flex-grow flex flex-col space-y-10">
        <h1 className="font-extrabold tracking-tighter text-center text-gray-800 text-5xl">
          Meet The Core Team!
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 text-center">
          <ProfileItem name="Allyn Navarra" title="Event Chairperson" />
          <ProfileItem name="Jasper Damasco" title="Event Vice Chairperson" />
          <ProfileItem name="John Rey Uy" title="Cyberpunk Outfit" />
          <ProfileItem name="Emirene Joy Castillo" title="Art Appropriation" />
          <ProfileItem name="Hannah Mae Arceño" title="T-Shirt Designing" />
          <ProfileItem name="Jayrose Bunda" title="Teamtok Content Creation" />
          <ProfileItem name="Hazel Kaye Lasconia" title="CICTzens Got Talent" />
          <ProfileItem
            name="Ralph Joseph Peralta"
            title="Quiz Bee Competition"
          />
        </div>
      </main>
    </>
  );
}

function ProfileItem({ name, title }) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="h-32 w-32 rounded-full bg-blue-500"></div>
      <h3 className="text-xl font-bold tracking-tight pt-5">{name}</h3>
      <p>{title}</p>
    </div>
  );
}

export default AboutPage;
