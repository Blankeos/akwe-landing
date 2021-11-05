import React from "react";
import Head from "next/head";

function AboutPage() {
  return (
    <>
      <Head>
        <title>Cybergence | About Us</title>
        <meta
          name="description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`Cybergence | About Us`} />
        <meta property="og:site_name" content="Cybergence" />
        <meta property="og:url" content="https://cybergence.vercel.app/" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:type" content="website" />
        <meta name="image" content="/photos/sc_0.png" />
        <meta property="og:image" content="/photos/sc_0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Cybergence" />
        <meta name="twitter:title" content={`Cybergence | About Us`} />
        <meta
          name="twitter:description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <meta name="twitter:image" content="/photos/sc_0.png" />
      </Head>
      <main className="max-w-5xl w-full mx-auto pt-10 pb-28 px-10 overflow-hidden flex-grow flex flex-col space-y-10">
        <h1 className="font-extrabold tracking-tighter text-center text-gray-800 text-5xl">
          Meet The Core Team!
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 text-center">
          <ProfileItem
            name="Allyn Navarra"
            title="Event Chairperson"
            imageSrc="/photos/event_chairperson.png"
          />
          <ProfileItem
            name="Jasper Damasco"
            title="Event Vice Chairperson"
            imageSrc="/photos/event_vice_chairperson.png"
          />
          <ProfileItem
            name="John Rey Uy"
            title="Cyberpunk Outfit"
            imageSrc="/photos/cyberpunk_outfit.png"
          />
          <ProfileItem
            name="Emirene Joy Castillo"
            title="Art Appropriation"
            imageSrc="/photos/art_appropriation.png"
          />
          <ProfileItem
            name="Hannah Mae Arceño"
            title="T-Shirt Designing"
            imageSrc="/photos/tshirt_designing.png"
          />
          <ProfileItem
            name="Jayrose Bunda"
            title="Teamtok Content Creation"
            imageSrc="/photos/teamtok_content_creation.png"
          />
          <ProfileItem
            name="Hazel Kaye Lasconia"
            title="CICTzens Got Talent"
            imageSrc="/photos/cictzens_got_talent.png"
          />
          <ProfileItem
            name="Ralph Joseph Peralta"
            title="Quiz Bee Competition"
            imageSrc="/photos/quiz_bee_competition.png"
          />
        </div>
      </main>
    </>
  );
}

function ProfileItem({ name, title, imageSrc }) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div
        className="h-32 w-32 rounded-full bg-white  border"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <h3 className="text-xl font-bold tracking-tight pt-5">{name}</h3>
      <p className="text-gray-700">{title}</p>
    </div>
  );
}

export default AboutPage;
