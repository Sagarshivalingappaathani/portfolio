"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from "/public/lottie/education.json";
import { CardContainer} from "../../helper/ui/3d-card"

function Education() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-lg">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div className="flex justify-center">
            <CardContainer>
              <div className="flex flex-col gap-6 font-poppins w-full">
                {educations.map((education) => (
                  <GlowCard
                    key={education.id}
                    identifier={`education-${education.id}`}
                  >
                    <motion.div
                      className="transition-colors duration-300 transform"
                      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.75 }}
                    >
                      <div className="p-3 relative text-white">
                        <Image
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {education.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {education.title}
                            </p>
                            <p className="text-sm sm:text-base">
                              {education.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </GlowCard>
                ))}
              </div>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
