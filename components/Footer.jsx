import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#feabf1] to-[#033f8f]  z-40 w-full pt-8 md:pt-20 pb-8 md:pb-20 px-10 sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border border-gray-200">
      <div className="flex items-center justify-center flex-col jus max-w-5xl w-full mx-auto md:grid grid-cols-[2fr,1fr] h-full">
        <div className="flex space-x-5">
          <div className="hidden h-36 w-36 rounded-full bg-gray-700 md:flex justify-center items-center">
            <img
              className="w-32 h-32"
              src="https://raw.githubusercontent.com/wvsu-cict-code/cict-logo/ffc1f42e6fa6e04c33df791495ec4ef04c3f4d84/mascot.svg"
            />
            ¸
          </div>
          <div className="flex md:justify-center w-full md:text-left mb-5 text-center md:text-start flex flex-col space-y-2">
            <p className="text-white md:text-lg font-bold max-w-sm">
              CICT VIRTUAL ACQUAINTANCE PARTY
            </p>
            <p className="text-xs md:text-base text-gray-200">
              Event Landing Website
            </p>
            <p className="text-xs md:text-base text-gray-200">
              Made with 💖 by{" "}
              <Link href="https://github.com/keiruu">
                <a className="text-white hover:text-pink-300" target="_blank">
                  Abigail
                </a>
              </Link>
              ,{" "}
              <Link href="https://github.com/ashcbrd">
                <a className="text-white hover:text-pink-300" target="_blank">
                  Asther
                </a>
              </Link>
              , and{" "}
              <Link href="https://github.com/blankeos">
                <a className="text-white hover:text-pink-300" target="_blank">
                  Carlo
                </a>
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex md:justify-center mx-auto w-full md:text-left text-center mt-2 flex md:flex-col text-xs md:text-sm space-y-1.5 text-gray-100">
          <a className="mr-4 mt-1 md:-mt-5">🐦 Just a Birb Not a Link</a>
          <Link href="https://github.com/blankeos/akwe-landing">
            <a className="hover:text-pink-300">👾 GitHub Source Code</a>
          </Link>
          <Link href="https://www.facebook.com/CICTSC2122/">
            <a className="ml-4 md:ml-0 hover:text-pink-300">
              📚 CICT SC Facebook Page
            </a>
          </Link>
        </div>
      </div>
      <p className="text-gray-200 md:w-full text-xs text-center pt-5">
        © 2021 WVSU-CICT. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
