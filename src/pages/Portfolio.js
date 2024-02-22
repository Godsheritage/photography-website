import React, { useContext } from "react";
// import images
import gradShot from "../img/Graduation/gradImg2.jpeg";
import scenery from "../img/scenery/A7401968-2.jpg";
import studioShot from "../img/Studio/studio.jpeg";
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
            <p className="mb-4">
              Our portfolio is a window into the worlds we've been privileged to<br/>
              capture. From the spontaneous laughter of a wedding day to the<br/>
              serene beauty of untouched landscapes, our collections are as<br/>
              diverse as the stories they tell. Each photograph is a chapter,<br/>
              each album a novel of memories waiting to be explored. We invite<br/>
              you to journey through our galleries and find the moments that
              move you.
            </p>
            <Button to="/contact" text="Make a booking" />
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            {/* image */}

            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Link to="/portfolio/gradshots">
                <img
                  className="object-cover h-full lg:w-[320px] hover:scale-110 transition-all duration-500"
                  src={gradShot}
                  alt=""
                />
              </Link>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Link to="/portfolio/studio">
                <img
                  className="object-cover h-full lg:w-[320px] hover:scale-110 transition-all duration-500"
                  src={studioShot}
                  alt=""
                />
              </Link>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Link to="/portfolio/scenery">
                <img
                  className="object-cover h-full lg:w-[320px] hover:scale-110 transition-all duration-500"
                  src={scenery}
                  alt=""
                />
              </Link>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Link to="/portfolio/birthdays">
                <img
                  className="object-cover  h-full lg:w-[320px] hover:scale-110 transition-all duration-500"
                  src={birthdays}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
