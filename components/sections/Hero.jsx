import React from "react";

function Hero() {
  return (
    <div className="max-w-5xl grid gap-10 md:gap-0 md:grid-cols-[2fr,1fr] mx-auto py-28 px-10 grid-cols-1 overflow-hidden">
      <div className="flex flex-col space-y-5 h-full justify-center">
        <h1 className="font-extrabold tracking-tigher text-5xl md:text-7xl">
          CYBERGENCE 2021
        </h1>
        <p className="max-w-sm text-lg">
          Emerging CICTzens into a Virtual Iridescent World.
        </p>
        <div className="font-light text-sm">
          <p>November 12, 2021, FRIDAY</p>
          <p>9:00 AM - 11:30 AM, 1:30 PM - 3:30 PM</p>
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="md:h-auto md:w-auto w-36 h-36"
          src="https://raw.githubusercontent.com/wvsu-cict-code/cict-logo/ffc1f42e6fa6e04c33df791495ec4ef04c3f4d84/mascot.svg"
        />
      </div>
    </div>
  );
}

export default Hero;
