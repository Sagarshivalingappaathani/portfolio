"use client";
import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import hero from "/public/lottie/hero.json";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 ">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <motion.div
        className="transition-colors duration-300 transform"
        whileInView={{ y: [-30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 my-10 md:pb-10 lg:pt-10">
            <h1 className="text-4xl font-semibold leading-10 text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] font-poppins">
              Hi, there{" "}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginLeft: "5px",
                }}
              >
                <Image
                  src="/image/hello.gif"
                  alt="Hello GIF"
                  width={50}
                  height={50}
                />
              </span>
              <br />I am <span className=" text-pink-500">Sagar Athani,</span>
            </h1>
            <h3 className="text-xl mt-3 font-semibold leading-7 sm:leading-10 text-black md:font-extrabold font-poppins">
              <span className=" text-[#070707]">
                {
                  "A Full Stack Web Developer with a Passion for Coding and Always Ready for the Next Coding Adventure."
                }
              </span>
            </h3>

            <div className="my-12 flex items-center gap-5">
              <Link
                href={personalData.github}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
              <Link
                href={personalData.leetcode}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              >
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>Contact me</span>
                </button>
              </Link>

              <Link
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                target="_blank"
                href={personalData.resume}
              >
                <span>Get Resume</span>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2  relative">
            <AnimationLottie animationPath={hero} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
