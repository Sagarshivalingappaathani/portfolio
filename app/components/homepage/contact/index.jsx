// @flow strict
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/contact.json";

function ContactSection() {
  return (
    <div
      id="contact"
      className="relative z-50 border-t mb-5 mt-12 lg:mt-24 border-[#25213b]"
    >
       <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Contact
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex justify-center items-start">
              <div className="w-3/4 h-3/4">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 md:gap-8 font-poppins">
              <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                <IoMdCall className="text-gray-500 text-lg mr-2" />
                <p className="text-sm font-bold text-gray-700 mr-4">
                  +91-7975208724
                </p>
              </div>
              <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                <MdAlternateEmail className="text-gray-500 text-lg mr-2" />
                <p className="text-sm text-gray-700 mr-4 font-bold">
                  sagarathani0418@gmail.com
                </p>
              </div>
              <div className="flex items-center bg-white rounded-lg p-3 hover:bg-gray-200 shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                <CiLocationOn className="text-gray-500 text-lg mr-2" />
                <p className="text-sm text-gray-700 font-bold">
                  Belagavi, Karnataka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
