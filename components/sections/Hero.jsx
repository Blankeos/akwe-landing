import React from "react";

function Hero() {
  return (
    <div className="max-w-5xl grid gap-10 md:gap-0 md:grid-cols-[2fr,1fr] mx-auto py-28 px-10 grid-cols-1 overflow-hidden">
      <div className="flex flex-col space-y-5 h-full justify-center">
        <h1 className="flex flex-col">
          <span className="uppercase text-gray-400">Acquaintance Party</span>
          <span className="font-black tracking-tighter text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-[#feabf1] to-[#033f8f] filter drop-shadow-sm">
            CYBERGENCE 2021
          </span>
        </h1>
        <p className="max-w-sm text-lg font-medium text-gray-700">
          Emerging CICTzens into a Virtual Iridescent World.
        </p>
        <div className="font-light text text-gray-600">
          <p>November 12, 2021, FRIDAY</p>
          <p>9:00 AM - 11:30 AM, 1:30 PM - 3:30 PM</p>
        </div>
        <div className="flex space-x-5">
          <button className="px-4 py-1 border border-blue-400">
            Search Students
          </button>
          <button className="px-4 py-1 border border-blue-400 bg-blue-400">
            See Events
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="md:h-auto md:w-auto w-36 h-36"
          src="https://raw.githubusercontent.com/wvsu-cict-code/cict-logo/ffc1f42e6fa6e04c33df791495ec4ef04c3f4d84/mascot.svg"
        />
      </div>
    </div>
  );
}

export default Hero;
