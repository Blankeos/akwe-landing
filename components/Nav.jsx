import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function Nav() {
  return (
    <nav className="z-40 w-full h-20 px-10 sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border border-gray-200 overflow-hidden">
      <div className="max-w-5xl w-full mx-auto flex justify-between h-full">
        <Link href="/">
          <a className="flex items-center font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#feabf1] to-[#033f8f] filter">
            CYBERGENCE
          </a>
        </Link>
        <div className=" h-full flex space-x-10 text-gray-600">
          <NavLinkItem href="/">Home</NavLinkItem>
          <NavLinkItem href="/events">Events</NavLinkItem>
          <NavLinkItem href="/about">About</NavLinkItem>
          <NavLinkItem href="/search">Student Search</NavLinkItem>
        </div>
      </div>
      {/* <div className="bg-indigo-200 h-full">Hello</div> */}
    </nav>
  );
}

function NavLinkItem({ href, children }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`flex items-center ${
          router.pathname === href ? " font-semibold" : ""
        }`}
      >
        {children}
      </a>
    </Link>
  );
}

export default Nav;
