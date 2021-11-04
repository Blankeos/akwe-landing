import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/dist/client/router";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="z-40 w-full h-20 px-10 sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border border-gray-200 overflow-hidden">
      <div className="max-w-5xl w-full mx-auto flex justify-between h-full">
        <Link href="/">
          <a className="flex items-center font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#feabf1] to-[#033f8f] filter">
            CYBERGENCE
          </a>
        </Link>
        <div className="hidden h-full md:flex space-x-10 text-gray-600">
          <NavLinkItem href="/">Home</NavLinkItem>
          <NavLinkItem href="/events">Events</NavLinkItem>
          <NavLinkItem href="/about">About</NavLinkItem>
          <NavLinkItem href="/search">Student Search</NavLinkItem>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-opacity-80"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterhref="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leavehref="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLinkItem href="/">Home</NavLinkItem>
              <NavLinkItem href="/program">Program</NavLinkItem>
              <NavLinkItem href="/about">About</NavLinkItem>
              <NavLinkItem href="/search">Student Search</NavLinkItem>
            </div>
          </div>
        )}
      </Transition>
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
