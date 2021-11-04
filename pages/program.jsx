import React from "react";
import Head from "next/head";

function Program() {
  return (
    <>
      <Head>
        <title>Cybergence | Program</title>
        <meta
          name="description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`Cybergence | Program`} />
        <meta property="og:site_name" content="Cybergence" />
        <meta property="og:url" content="https://cybergence.vercel.app/" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:type" content="website" />
        <meta name="image" content="/photos/sc_0.png" />
        <meta property="og:image" content="/photos/sc_0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Cybergence" />
        <meta name="twitter:title" content={`Cybergence | Program`} />
        <meta
          name="twitter:description"
          content="Emerging CICTzens into a Virtual Iridescent World."
        />
        <meta name="twitter:image" content="/photos/sc_0.png" />
      </Head>
      <main className="max-w-5xl w-full mx-auto pt-10 pb-28 px-10 overflow-hidden flex-grow flex flex-col space-y-10">
        <h1 className="font-extrabold tracking-tighter text-center text-gray-800 text-5xl">
          Program Flow
        </h1>
        <div className="flex flex-col space-y-2 text-gray-700 py-20">
          <ProgramFlowItem
            leftHeading="I. Opening Hymn"
            rightHeading="9:00 AM"
            items={["a. National Anthem", "b. Prayer", "c. University Hymn"]}
          />
          <ProgramFlowItem
            leftHeading="II. Opening Remarks"
            rightHeading="9:10 AM"
            items={["Dr. Ma. Beth S. Conception, Dean"]}
          />
          <ProgramFlowItem
            leftHeading="III. Acquaintance Proper"
            rightHeading="9:15 AM"
          />
          <ProgramFlowItem
            leftHeading="IV. Presentation of Groups"
            rightHeading="9:25 AM"
            items={[
              "a. Video Presentation of Each group",
              "b. Presentation of Activities",
            ]}
          />
          <ProgramFlowItem
            leftHeading="V. Ice Breaker"
            rightHeading="10:50 AM"
          />
          <ProgramFlowItem
            leftHeading="VI. Presentation of the Board of Judges"
            rightHeading="10:00 AM"
          />
          <ProgramFlowItem
            leftHeading="VII. Contest Proper"
            rightHeading="10:05 AM"
            items={[
              "a. CyberPunk Outfits",
              "b. Artwork Appropriation",
              "c. T-shirt Designing",
              "d. TeamTok Content Creation",
            ]}
          />
          <ProgramFlowItem
            leftHeading="VIII. Virtual Love Note"
            rightHeading="1:30 PM"
          />
          <ProgramFlowItem
            leftHeading="IX. Ice Breaker"
            rightHeading="1:40 PM"
          />
          <ProgramFlowItem leftHeading="X. Quiz Bee" rightHeading="1:40 PM" />
          <ProgramFlowItem
            leftHeading="XI. CICTzens Got Talent"
            rightHeading="2:30 PM"
          />
          <ProgramFlowItem
            leftHeading="XII. Virtual Jamming"
            rightHeading="3:00 PM"
            items={["CICT Students"]}
          />
          <ProgramFlowItem
            leftHeading="XIII. Giving of Certificate of Appreciation and Tokens to the Board of Judges and Facilitators"
            rightHeading="3:30 PM"
          />
          <ProgramFlowItem
            leftHeading="XIV. Tossing of Drinks"
            rightHeading="3:35 PM"
            items={["Jam Roanne Planco, CICT Student Council Chairperson"]}
          />
          <ProgramFlowItem
            leftHeading="XV. Awarding Ceremony"
            rightHeading="3:40 PM"
          />
          <ProgramFlowItem
            leftHeading="XVI. Closing Remarks"
            rightHeading="3:45 PM"
            items={[
              "Cyrene Dofitas, CICT Student Council Adviser",
              "Kyle Robles & Chelsea Joy Young, Event Hosts",
            ]}
          />
        </div>
      </main>
    </>
  );
}

function ProgramFlowItem({ leftHeading, rightHeading, items = [] }) {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="font-bold">{leftHeading}</h2>
        <div className="pl-10">
          {items.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
      <span className="font-bold flex-shrink-0 pl-12">{rightHeading}</span>
    </div>
  );
}

export default Program;
