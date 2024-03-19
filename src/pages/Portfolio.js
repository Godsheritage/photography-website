import React, { useContext } from "react";
// import images
import gradShot from "../img/Graduation/GradShots0.jpg";
import scenery from "../img/scenery/Scenery0.jpg";
import studioShot from "../img/Studio/studio7.jpg";
import birthdays from "../img/birtdays/A7402184-2.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import context
import { CursorContext } from "../context/CursorContext";
import Button from "../components/Button";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              My portfolio is a window into the worlds I've been privileged to
              capture. From the spontaneous laughter of a wedding day to the
              serene beauty of untouched landscapes, my collections are as
              diverse as the stories they tell. Each photograph is a chapter,
              each album a novel of memories waiting to be explored. I invite
              you to journey through my galleries and find the moments that move
              you.
            </p>
            <Button to="/pricing" text="Make a booking" />
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-4 lg:gap-2"
          >
            {/* image */}

            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[150px] sm:h-[175px] md:h-[200px] lg:h-[220px] bg-accent overflow-hidden relative">
              <Link to="/portfolio/gradshots">
                <img
                  className="object-cover w-full h-full transition-all duration-500"
                  src={gradShot}
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-100 transition-opacity duration-500">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                    Graduations
                  </span>
                </div>
              </Link>
            </div>

            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[150px] sm:h-[175px] md:h-[200px] lg:h-[220px] bg-accent overflow-hidden relative">
              <Link to="/portfolio/studio">
                <img
                  className="object-cover w-full h-full transition-all duration-500"
                  src={studioShot}
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-100 transition-opacity duration-500">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                    Studio
                  </span>
                </div>
              </Link>
            </div>

            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[150px] sm:h-[175px] md:h-[200px] lg:h-[220px] bg-accent overflow-hidden relative">
              <Link to="/portfolio/scenery">
                <img
                  className="object-cover w-full h-full transition-all duration-500"
                  src={scenery}
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-100 transition-opacity duration-500">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                    Scenery
                  </span>
                </div>
              </Link>
            </div>

            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[150px] sm:h-[175px] md:h-[200px] lg:h-[220px] bg-accent overflow-hidden relative">
              <Link to="/portfolio/birthdays">
                <img
                  className="object-cover h-full lg:w-[320px] md:w-[full] transition-all duration-500"
                  src={birthdays}
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-100 transition-opacity duration-500">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                    Birthdays
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
