import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#feabf1] to-[#033f8f]  z-40 w-full pt-20 pb-36 px-10 sticky top-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border border-gray-200">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-[2fr,1fr] h-full">
        <div className="flex space-x-5">
          <div className="h-36 w-36 rounded-full bg-gray-700 flex justify-center items-center">
            <img
              className="w-32 h-32"
              src="https://raw.githubusercontent.com/wvsu-cict-code/cict-logo/ffc1f42e6fa6e04c33df791495ec4ef04c3f4d84/mascot.svg"
            />
            ¸
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-white text-lg font-bold max-w-sm">
              CICT VIRTUAL ACQUAINTANCE PARTY
            </p>
            <p className="text-gray-200">Event Landing Website</p>
            <p className="text-gray-200">
              Made with 💖 by{" "}
              <Link href="https://github.com/keiruu">
                <a className="text-white hover:text-pink-300" target="_blank">Abigail</a>
              </Link>
              ,{" "}
              <Link href="https://github.com/ashcbrd">
                <a className="text-white hover:text-pink-300" target="_blank">Asther</a>
              </Link>
              , and{" "}
              <Link href="https://github.com/blankeos">
                <a className="text-white hover:text-pink-300" target="_blank">Carlo</a>
              </Link>
              .
            </p>
            <p className="text-gray-200 text-xs pt-5">
              © 2021 WVSU-CICT. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-sm space-y-1.5 text-gray-100">
          <a>🐦 Twitter</a>
          <a>📚 Facebook</a>
          <a>🤵 LinkedIn</a>
          <a>📷 Instagram</a>
          <a>📧 Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
