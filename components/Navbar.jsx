"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import Credit from "./Credit";

const Navbar = () => (
  <div>
    <Credit />
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
