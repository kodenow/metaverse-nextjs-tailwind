"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const Navbar = () => (
  <div>
    <div className="flex flex-col md:flex-row md:justify-center md:items-center bg-[#4e4c4c] p-1 z-10">
      <div className="flex justify-center items-center">
        <p className="text-white">Free template by</p>
        <Image
          className="ml-2 mr-1"
          src="/logoSymbol.png"
          alt="kodenowLogo"
          width="30"
          height="30"
        />
        <Image
          className="mr-3"
          src="/KodeNowLogo.png"
          alt="kodenowLogo"
          width="126"
          height="20"
        />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-white text-[20px] mr-2 hidden md:block">|</h1>
        <p className="text-white">Get code here</p>
        <a
          href="https://github.com/kodenow/metaverse-nextjs-tailwind"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="-ml-2"
            src="/github.png"
            alt="kodenowLogo"
            width="135"
            height="50"
          />
        </a>
      </div>
    </div>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings}  top-0 left-0 w-screen`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 py-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />

        <div className="flex">
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            Metaverse
          </h2>
        </div>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </motion.nav>
  </div>
);

export default Navbar;
