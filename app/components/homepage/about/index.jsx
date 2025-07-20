"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardContainer } from "../../helper/ui/3d-card";
import GlowCard from "../../helper/glow-card";

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
        <div className="flex justify-center mt-8">
          <motion.div
            className="transition-colors duration-300 transform"
            whileInView={{ y: [-30, 0], opacity: [0, 1] }}
            transition={{ duration: 0.75 }}
          >
            <Image
              src="/Sagar.jpg"
              width={300}
              height={300}
              alt="sagar athani"
              className="rounded-lg scale-110 cursor-pointer hover:scale-125 duration-300 mt-5"
            />
          </motion.div>
        </div>
        <CardContainer className=" border-black border-2 rounded-xl">
          <GlowCard key={"about"} identifier={`About-Glowcard`}>
            <motion.div
              className="transition-colors duration-300 transform"
              whileInView={{ y: [-30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.75 }}
            >
              <div className="text-black font-sans text-sm lg:text-lg bg-gray-100 rounded-lg p-4 shadow-md ">
                <p className="mb-5 pink-gradient-text text-xl uppercase font-poppins font-semibold">
                  Namaste,
                </p>
                <p className="font-semibold font-poppins">
                I am a B.Tech student at NITK, Surathkal, passionate about technology and innovation. 
                Proficient in C++, JavaScript, Python, and Solidity, I specialize in web development, 
                machine learning, and blockchain.
                <br /><br />
                Recently interned at Bosch Global Software Technologies, working with large datasets 
                and graph neural networks. I enjoy building scalable applications and tackling complex challenges.
                </p>
              </div>
            </motion.div>
          </GlowCard>
        </CardContainer>
      </div>
    </div>
  );
}

export default AboutSection;
