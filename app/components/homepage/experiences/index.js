"use client";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import { motion } from "framer-motion";
import { experiences } from "@/utils/data/experience";
import { CardContainer } from "../../helper/ui/3d-card";

function Experiences() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="relative text-gray-700 antialiased text-sm font-semibold">
        <div className="sm:block w-1 bg-gray-500 absolute h-full sm:left-1/2 sm:transform sm:-translate-x-1/2"></div>

        {experiences.map((experience, index) => (
          <div key={experience.id} className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <div className={`flex ${index % 2 === 0 ? 'justify-start sm:mr-10' : 'justify-end sm:ml-20'} w-full items-center mx-auto`}>
                <div className="w-full sm:w-1/2 sm:pr-8 m-4">
                  <GlowCard
                    key={experience.id}
                    identifier={`experience-${experience.id}`}
                  >
                    <motion.div
                      className="transition-colors duration-300 transform"
                      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.75 }}
                    >
                      <div className="p-3">
                        <div className="flex">
                          <p className="text-xs sm:text-sm green-gradient-text mt-2 font-poppins">
                            {experience.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium font-poppins uppercase">
                              {experience.company}
                            </p>
                            <p className="text-sm text-pink-600 font-poppins sm:text-base mb-2">
                              {experience.title}
                            </p>
                            <ul className="custom-list">
                              {experience.Description.map((desc, descIndex) => (
                                <li key={descIndex} className="mt-2 font-poppins">
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </GlowCard>
                </div>
              </div>
              <div className="rounded-full border-4 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 hidden items-center justify-center sm:block">
                <Image
                  src={experience.image}
                  alt={experience.company}
                  width={130}
                  height={70}
                  className="rounded-full"
                />
              </div>
              <div className="sm:hidden rounded-full bg-blue-500 border-white border-4 w-5 h-5 absolute left-0 translate-y-20 transform -translate-x-2 flex items-center justify-center"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
