import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="z-40 w-full h-20 px-10 sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border border-gray-200">
      <div className="max-w-5xl w-full mx-auto flex justify-between h-full">
        <Link href="/">
          <a className="flex items-center font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#feabf1] to-[#033f8f] filter">
            CYBERGENCE
          </a>
        </Link>
        <div className=" h-full flex space-x-10">
          <Link href="/" className="h-full">
            <a className="flex items-center">Home</a>
          </Link>
          <Link href="/" className="h-full">
            <a className="flex items-center">Events</a>
          </Link>
          <Link href="/about" className="h-full">
            <a className="flex items-center">About</a>
          </Link>
          <Link href="/search" className="h-full">
            <a className="flex items-center">Search Students</a>
          </Link>
        </div>
      </div>
      {/* <div className="bg-indigo-200 h-full">Hello</div> */}
    </nav>
  );
}

export default Nav;
