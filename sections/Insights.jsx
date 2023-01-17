"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center"
      />
    </motion.div>
    <div className="flex flex-row space-x-4 2xl:max-w-[1280px] mx-auto justify-between">
      <img
        src="/insight-1.png"
        alt=""
        className="overflow-hidden basis-[25%] rounded-[32px] "
      />
      {/* <div className="basis-1/4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          modi maxime veritatis? Repellendus velit pariatur dolorem quae!
          Necessitatibus ut deleniti doloremque magni reprehenderit, blanditiis,
          neque soluta, nisi repellat vitae quaerat.
        </p>
      </div> */}
      <div className="basis-[50%] w-full justify-between items-center">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          The launch of the Metaverse
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          modi maxime veritatis? Repellendus velit pariatur dolorem quae!
          Necessitatibus ut deleniti doloremque magni reprehenderit, blanditiis,
          neque soluta, nisi repellat vitae quaerat.
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </section>
);

export default Insights;
