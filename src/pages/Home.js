import React, { useContext } from "react";
// import images
import WomanImg from "../img/home/man.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// cursor context
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">photographer</h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-6 lg:mb-12">
              DMV
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
              <Link to={"/pricing"} className="btn mb-2 sm:mb-0 sm:mr-2">
                Book Now
              </Link>
              <Link to={"/portfolio"} className="btn">
                View My Work
              </Link>
            </div>
          </motion.div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                style={{}}
                transition={transition1}
                src={"https://photographysitebucket.s3.amazonaws.com/home/Heritage4.png"}
                className=""
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
