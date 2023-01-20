"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <div className="flex flex-col md:flex-row 2xl:max-w-[1280px] mx-auto justify-between">
      <img
        src={imgUrl}
        alt=""
        className=" overflow-hidden sm:w-[100%] md:basis-[40%] lg:basis-[40%] rounded-[32px] "
      />
      <div className="sm:w-[100%]  md:basis-[40%] lg:basis-[40%] justify-between items-center">
        <h4 className="font-normal text-[26px] text-white">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>
      <div className="md:flex hidden md:block items-center justify-center w-[50px] h-[50px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[25%] h-[25%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
