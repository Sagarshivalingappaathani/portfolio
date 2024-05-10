"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <div
      id="about"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center mt-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className=" px-2 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex justify-center">
          <motion.div
            className="transition-colors duration-300 transform"
            whileInView={{ y: [-30, 0], opacity: [0, 1] }}
            transition={{ duration: 0.75 }}
          >
            <Image
              src="/Sagar.jpg"
              width={280}
              height={280}
              alt="Abu Said"
              className="rounded-lg scale-110 cursor-pointer"
            />
          </motion.div>
        </div>
        <div className="">
          <motion.div
            className="transition-colors duration-300 transform"
            whileInView={{ y: [-30, 0], opacity: [0, 1] }}
            transition={{ duration: 0.75 }}
          >
            <div className="text-black font-sans text-sm lg:text-lg bg-gray-100 rounded-lg p-4 shadow-md">
              <p className="mb-5 text-pink-500 text-xl uppercase font-poppins font-semibold">
                Namaste,
              </p>
              <p className="font-semibold font-poppins">
                I am Sagar Athani from Belagavi, Karnataka, currently pursuing a
                B.Tech in Information Technology in NITK. Alongside my studies,
                I actively participate in technical clubs to enrich my
                extracurricular activities. My expertise lies in web
                development, especially in the MERN stack. To enhance my
                problem-solving abilities, I engage with platforms like LeetCode
                and GeeksforGeeks, where I tackle challenges across various
                topics and participate in contests.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
