import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/dist/client/router";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="z-40 w-full sticky top-0">
        {/* Nav Wrapper */}
        <div className="relative w-full h-20 ">
          {/* Nav Background */}
          <div className="absolute w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-b"></div>
          {/* Nav Content */}
          <div className="absolute max-w-5xl w-full mx-auto flex justify-between h-20 px-10">
            <Link href="/">
              <a className="flex items-center font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#feabf1] to-[#033f8f] filter">
                CYBERGENCE
              </a>
            </Link>
            <div className="hidden h-full md:flex space-x-10 text-gray-600">
              <NavLinkItem href="/">Home</NavLinkItem>
              <NavLinkItem href="/about">About</NavLinkItem>
              <NavLinkItem href="/program">Program</NavLinkItem>
              <NavLinkItem href="/search">Student Search</NavLinkItem>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-opacity-80 relative z-20"
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
          {/* Mobile Nav Dropdown */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-200 transform"
            enterFrom="-translate-y-96"
            enterhref="translate-y-0"
            leave="transition ease-in duration-100 transform"
            leaveFrom="translate-y-0"
            leavehref="-translate-y-96"
          >
            {(ref) => (
              <div
                className="absolute w-full px-10 border-b border-gray-200 bg-white"
                id="mobile-menu"
              >
                <div className="px-2 py-8 space-y-5 sm:px-3 w-full">
                  <NavLinkItem href="/">Home</NavLinkItem>
                  <NavLinkItem href="/program">Program</NavLinkItem>
                  <NavLinkItem href="/about">About</NavLinkItem>
                  <NavLinkItem href="/search">Student Search</NavLinkItem>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </nav>
    </>
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
