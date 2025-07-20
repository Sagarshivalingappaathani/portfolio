"use client";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import lottieFile from "/public/lottie/contact.json";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <>
      <div
        id="contact"
        className="relative z-50 border-t mt-12 lg:mt-24 border-[#25213b] mb-5"
      >
        <Image
          src="/section.svg"
          alt="Hero"
          width={1572}
          height={400}
          className="absolute top-0 -z-10"
        />
        <motion.div
          className="transition-colors duration-300 transform"
          whileInView={{ y: [-30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.75 }}
        >
          <div className="container mx-auto flex flex-col items-center mb-5">
            <div className="flex justify-center my-5 lg:py-8">
              <div className="flex items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                  Contact
                </span>
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
              </div>
            </div>

            <div className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                <div className="flex justify-center items-start">
                  <div className="scale-150 px-5 mt-4 sm:mt-2">
                    <AnimationLottie animationPath={lottieFile} />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 md:gap-6 font-poppins mt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full"
                  >
                    <Link href="mailto:sagarathani0418@gmail.com">
                      <div className="flex items-center bg-white rounded-xl p-4 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 h-20">
                        <div className="bg-orange-100 p-2 rounded-lg mr-3">
                          <MdAlternateEmail className="text-orange-500 text-xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                          <p className="text-sm text-gray-800 font-bold truncate">
                            sagarathani0418@gmail.com
                          </p>
                        </div>
                        <HiExternalLink className="text-gray-400 text-sm ml-2 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                  >
                    <Link href="tel:+917975208724">
                      <div className="flex items-center bg-white rounded-xl p-4 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 h-20">
                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                          <IoMdCall className="text-green-500 text-xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</p>
                          <p className="text-sm text-gray-800 font-bold truncate">
                            +91-7975208724
                          </p>
                        </div>
                        <HiExternalLink className="text-gray-400 text-sm ml-2 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full"
                  >
                    <div className="flex items-center bg-white rounded-xl p-4 shadow-lg border border-gray-100 h-20">
                      <div className="bg-red-100 p-2 rounded-lg mr-3">
                        <CiLocationOn className="text-red-500 text-xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Location</p>
                        <p className="text-sm text-gray-800 font-bold truncate">
                          Belagavi, Karnataka
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 md:gap-6 font-poppins">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full"
                  >
                    <Link href="https://www.instagram.com/_sagar0418/" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white rounded-xl p-4 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 h-20">
                        <div className="bg-pink-100 p-2 rounded-lg mr-3">
                          <FaInstagram className="text-pink-500 text-xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Instagram</p>
                          <p className="text-sm text-gray-800 font-bold truncate">
                            _sagar0418
                          </p>
                        </div>
                        <HiExternalLink className="text-gray-400 text-sm ml-2 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full"
                  >
                    <Link href="https://www.linkedin.com/in/sagar-athani-4a5931251/" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white rounded-xl p-4 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 h-20">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <FaLinkedin className="text-blue-500 text-xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">LinkedIn</p>
                          <p className="text-sm text-gray-800 font-bold truncate">
                            Sagar Athani
                          </p>
                        </div>
                        <HiExternalLink className="text-gray-400 text-sm ml-2 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full"
                  >
                    <Link href="https://github.com/Sagarshivalingappaathani" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center bg-white rounded-xl p-4 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 h-20">
                        <div className="bg-gray-100 p-2 rounded-lg mr-3">
                          <FaGithub className="text-gray-700 text-xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">GitHub</p>
                          <p className="text-sm text-gray-800 font-bold truncate">
                            Sagarshivalingappaathani
                          </p>
                        </div>
                        <HiExternalLink className="text-gray-400 text-sm ml-2 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ContactSection;