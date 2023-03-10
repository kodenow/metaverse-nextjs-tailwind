"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div class="absolute gradient-06 z-0"></div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People of the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="absolute" />

        <div className="absolute bottom-[150px] right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="people-01-glow.png"
            alt="people"
            className="absolute scale-[250%]"
          />
          <img
            src="people-01.png"
            alt="people"
            className="relative w-full h-full "
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="people-02-glow.png"
            alt="people"
            className="absolute scale-[250%]"
          />
          <img
            src="people-02.png"
            alt="people"
            className="relative w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="people-03-glow.png"
            alt="people"
            className="absolute scale-[250%]"
          />
          <img
            src="people-03.png"
            alt="people"
            className="relative w-full h-full"
          />
        </div>
        {/* <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="absolute t-[100px] flex w-full h-[550px]"
        ></motion.div> */}
        <div className="absolute bottom-[150px] w-[208px] left-[150px] rounded-[24px] bg-[#5D6680]">
          <div className="relative top-[90px]">
            <img
              src="mini-man-1.png"
              alt="world"
              className="absolute z-10 left-[35px]"
            />
            <img
              src="mini-man-2.png"
              alt="world"
              className="absolute z-10 left-[24px]"
            />
            <img
              src="mini-man-3.png"
              alt="world"
              className="absolute z-10 left-[13px]"
            />
            <p className="absolute z-10 top-[5px] left-[65px] text-white text-[12px]">
              +478 has joined
            </p>
            <h2 className="absolute z-10  top-[30px] left-[20px] text-white">
              The upside down
            </h2>
          </div>
          <img
            src="world-upside-glow.png"
            alt="world"
            className="absolute scale-[200%] "
          />
          <img
            src="world-upside.png"
            alt="world"
            className="relative  p-[6px] rounded-[24px]"
          />
        </div>

        <div className="absolute top-[60px] w-[192px] right-[150px] rounded-[24px] bg-[#5D6680]">
          <div className="relative top-[80px]">
            <img
              src="mini-man-1.png"
              alt="world"
              className="absolute z-10 left-[35px]"
            />
            <img
              src="mini-man-2.png"
              alt="world"
              className="absolute z-10 left-[24px]"
            />
            <img
              src="mini-man-3.png"
              alt="world"
              className="absolute z-10 left-[13px]"
            />
            <p className="absolute z-10 top-[5px] left-[65px] text-white text-[12px]">
              +264 has joined
            </p>
            <h2 className="absolute z-10  top-[30px] left-[20px] text-white">
              Hawkins Labs
            </h2>
          </div>
          <img
            src="world-labs-glow.png"
            alt="world"
            className="absolute scale-[200%] "
          />
          <img
            src="world-labs.png"
            alt="world"
            className="relative  p-[6px] rounded-[24px]"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
