"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
    <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <motion.div
        className="transition-colors duration-300 transform"
        whileInView={{ y: [-30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.75 }}
      >
        <div className="w-full my-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
            {Object.entries(skillsData).map(([category, skills]) => (
              <motion.div
                key={category}
                className="bg-[#f8f8f8] rounded-xl p-8 transition-all duration-300 relative"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-black rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-black font-poppins capitalize">
                    {category === 'coursework' ? 'Course Work' : category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center p-4 bg-transparent rounded-xl border border-gray-300 hover:border-black transition-all duration-300"
                    >
                      <div className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <span className="text-black text-xs sm:text-sm font-poppins text-center transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
