import { motion } from "framer-motion";
import React, { useContext } from "react";
import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";
// import studioShot from "../../img/Studio/studio.jpeg";
import GradShots0 from "../../img/Graduation/GradShots0.jpg";
import GradShots1 from "../../img/Graduation/GradShots1.jpg";
import GradShots2 from "../../img/Graduation/GradShots2.jpg";
import GradShots3 from "../../img/Graduation/GradShots3.jpg";
import GradShots4 from "../../img/Graduation/GradShots4.jpg";
import GradShots5 from "../../img/Graduation/GradShots5.jpg";
import GradShots6 from "../../img/Graduation/GradShots6.jpg";
import GradShots7 from "../../img/Graduation/GradShots7.jpg";
import GradShots8 from "../../img/Graduation/GradShots8.jpg";
import GradShots9 from "../../img/Graduation/GradShots9.jpg";
import GradShots10 from "../../img/Graduation/GradShots10.jpg";
import GradShots11 from "../../img/Graduation/GradShots11.jpg";
import GradShots12 from "../../img/Graduation/GradShots12.jpg";
import GradShots13 from "../../img/Graduation/GradShots13.jpg";
import GradShots14 from "../../img/Graduation/GradShots14.jpg";
import GradShots15 from "../../img/Graduation/GradShots15.jpg";
import GradShots16 from "../../img/Graduation/GradShots16.jpg";
import GradShots17 from "../../img/Graduation/GradShots17.jpg";
import GradShots18 from "../../img/Graduation/GradShots18.jpg";
import GradShots19 from "../../img/Graduation/GradShots19.jpg";
import GradShots20 from "../../img/Graduation/GradShots20.jpg";
import GradShots21 from "../../img/Graduation/GradShots21.jpg";
import GradShots22 from "../../img/Graduation/GradShots22.jpg";
import GradShots23 from "../../img/Graduation/GradShots23.jpg";

const Graduations = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const picsArray = [
    GradShots0,
    GradShots1,
    GradShots2,
    GradShots3,
    GradShots4,
    GradShots5,
    GradShots6,
    GradShots7,
    GradShots8,
    GradShots9,
    GradShots10,
    GradShots11,
    GradShots12,
    GradShots13,
    GradShots14,
    GradShots15,
    GradShots16,
    GradShots17,
    GradShots18,
    GradShots19,
    GradShots20,
    GradShots21,
    GradShots22,
    GradShots23,
  ];
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
        className="container mx-auto h-full relative overflow-y-scroll"
      >
        <h1 className="h1" style={{ textAlign: "center" }}>
          Graduations
        </h1>
        {/* image boxes */}
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
            {picsArray.map(
              (
                gradShot,
                index // Change 10 to the number of boxes you want
              ) => (
                <div className="relative" key={index}>
                  <img
                    className="object-cover h-80 sm:h-96 lg:h-128 w-full hover:scale-110 transition-all duration-500"
                    src={gradShot}
                    alt=""
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Graduations;
