import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Full-Stack Developer", "Data Engineer", "Front-End Developer"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-24 md:mt-36 lg:mt-0 md:text-left rounded-3xl bg-clip-text relative w-full">
      {/* Desktop View */}
      <div className="flex-col hidden lg:flex">
        <motion.h1
          className="text-5xl xl:text-7xl font-medium text-white text-shadow-lg"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Pranav Rustagi
        </motion.h1>
        <br />
        <div className="flex flex-col items-start">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black !text-teal-300 text-4xl xl:text-6xl text-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-2 md:space-y-4 lg:hidden text-shadow-lg text-center py-2 md:py-10">
        <motion.p
          className="text-3xl md:text-6xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Pranav Rustagi
        </motion.p>
        <div className="text-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold !text-teal-300 text-2xl md:text-5xl text-shadow-lg text-center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
