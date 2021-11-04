import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="max-w-5xl w-full mx-auto flex justify-between h-20 px-10">
      <Link href="/">
        <a className="flex items-center font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#feabf1] to-[#033f8f] filter">
          CYBERGENCE
        </a>
      </Link>
      <div className=" h-full flex space-x-10 font-medium text-lg">
        <Link href="/" className="h-full">
          <a className="flex items-center">Home</a>
        </Link>
        <Link href="/" className="h-full">
          <a className="flex items-center">Events</a>
        </Link>
        <Link href="/" className="h-full">
          <a className="flex items-center">About</a>
        </Link>
        <Link href="/" className="h-full">
          <a className="flex items-center">Search Students</a>
        </Link>
      </div>
      <div className="bg-indigo-200 h-full">Hello</div>
    </nav>
  );
}

export default Nav;
