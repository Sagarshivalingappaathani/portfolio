"use client";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Executive Member",
    company: "IE, NITK ",
    duration: "(Dec. 2022 – Present)",
    Description: [
      "Developed a Club Event Management System in a team of 3 using Next.js, MongoDB, Express.js,and Mycalendar.js library",
      "Implemented RBAC (Role Based Access Control) for effective admin and member role management",
    ],
  },
  {
    id: 2,
    title: "Executive Member",
    company: "IE, NITK ",
    duration: "(Dec. 2022 – Present)",
    Description: [
      "Developed a Club Event Management System in a team of 3 using Next.js, MongoDB, Express.js,and Mycalendar.js library for admin-friendly event scheduling and management.",
      "Implemented RBAC (Role Based Access Control) for effective admin and member role management",
    ],
  },
];

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
      <div class="relative text-gray-700 antialiased text-sm font-semibold">
        <div class="sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

        <div class="mt-6 sm:mt-0 sm:mb-12">
          <div class="flex flex-col sm:flex-row items-center">
            <div class="flex justify-start w-full items-center mx-auto sm:mr-10">
              <div class="w-full sm:w-1/2 sm:pr-8 m-4">
                <GlowCard
                  key={experiences[0].id}
                  identifier={`experience-${experiences[0].id}`}
                >
                  <motion.div
                    className="transition-colors duration-300 transform"
                    whileInView={{ y: [-30, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.75 }}
                  >
                    <div className="p-3">
                      <div className="flex">
                        <p className="text-xs sm:text-sm text-[#16f2b3] mt-2">
                          {experiences[0].duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experiences[0].company}
                          </p>
                          <p className="text-sm text-pink-600 sm:text-base mb-2">
                            {experiences[0].title}
                          </p>
                          <ul className="custom-list">
                            {experiences[0].Description.map((desc, index) => (
                              <li key={index} className="mt-2">
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
            <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center hidden sm:block"></div>
          </div>
        </div>

        <div class="mt-6 sm:mt-0 sm:mb-12">
          <div class="flex flex-col sm:flex-row items-center">
            <div class="flex justify-end w-full items-center mx-auto sm:ml-20">
              <div class="w-full sm:w-1/2 sm:pr-8 m-4">
                <GlowCard
                  key={experiences[1].id}
                  identifier={`experience-${experiences[1].id}`}
                >
                  <motion.div
                    className="transition-colors duration-300 transform"
                    whileInView={{ y: [-30, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.75 }}
                  >
                    <div className="p-3">
                      <div className="flex">
                        <p className="text-xs sm:text-sm text-[#16f2b3] mt-2">
                          {experiences[0].duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experiences[0].company}
                          </p>
                          <p className="text-sm text-pink-600 sm:text-base mb-2">
                            {experiences[0].title}
                          </p>
                          <ul className="custom-list">
                            {experiences[0].Description.map((desc, index) => (
                              <li key={index} className="mt-2">
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
            <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center hidden sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
