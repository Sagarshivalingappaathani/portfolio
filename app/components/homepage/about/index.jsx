// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div
      id="projects"
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
          <Image
            src="/Sagar.jpg"
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg scale-110 cursor-pointer"
          />
        </div>
        <div className="">
          <div className="text-black font-sans text-sm lg:text-lg bg-gray-100 rounded-lg p-4 shadow-md">
            <p className="font-medium mb-5 text-[#010101] text-xl uppercase">
              Namaste,
            </p>
            <p>
              I'm Sagar Athani from Belagavi, Karnataka, currently pursuing a
              B.Tech in Information Technology in NITK. Alongside my studies, I
              actively participate in technical clubs to enrich my
              extracurricular activities. My expertise lies in web development,
              especially in the MERN stack. To enhance my problem-solving
              abilities, I engage with platforms like LeetCode and
              GeeksforGeeks, where I tackle challenges across various topics and
              participate in contests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
