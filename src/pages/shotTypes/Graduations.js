import { motion } from "framer-motion";
import React, { useContext } from "react";
import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";
import studioShot from "../../img/Studio/studio.jpeg";

const Graduations = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className=" container mx-auto h-full relative overflow-y-scroll"
      >
        {/* image boxes */}
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="relative">
              <img
                className="object-cover h-64 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>

            <div className="relative">
              <img
                className="object-cover h-64 sm:h-80 lg:h-96 w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative col-span-2 md:col-span-1 lg:col-span-2">
              <img
                className="object-cover h-96 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative col-span-2">
              <img
                className="object-cover h-64 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative col-span-2">
              <img
                className="object-cover h-64 sm:h-80 lg:h-96 w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover h-64 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover h-64 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover h-64 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover h-64 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative">
              <img
                className="object-cover h-64 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
            <div className="relative col-span-2">
              <img
                className="object-cover h-64 sm:h-80 lg:h-full w-full hover:scale-110 transition-all duration-500"
                src={studioShot}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Graduations;
