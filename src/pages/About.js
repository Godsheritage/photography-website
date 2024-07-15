import React, { useContext } from "react";
// import images
import WomanImg from "../img/about/manAbout.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

const About = () => {
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
        className="container mx-auto relative"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img className="w-full h-auto" src={"https://photographysitebucket.s3.amazonaws.com/home/Heritage.jpg"} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-8 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Hey there, I'm Godsheritage Adeoye! Originally from Kwara State,
              Nigeria, I'm a former Apple software engineer with a passion for
              machine learning. Photography and videography are my specialties.
              Since I was young, I've loved storytelling and thinking outside
              the box. I believe that's what visual media is all about—telling
              stories. With over a decade of experience, I've honed my skills in
              creating visual narratives. Whether you need graduation or wedding
              shoots, commercials, corporate videos, or more, I've got you
              covered. Feel free to follow me on social media for updates, or
              navigate to the <Link to={"/pricing"} style={{textDecoration:"underline"}}  >Pricing</Link> page, if you have any questions about
              pricing!
            </p>
            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { transition1 } from "../transitions";
// import { CursorContext } from "../context/CursorContext";
// import WomanImg from "../img/about/manAbout.jpg";

// const About = () => {
//   const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: "100%" }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: "100%" }}
//       transition={transition1}
//       className="section"
//     >
//       <div
//         onMouseEnter={mouseEnterHandler}
//         onMouseLeave={mouseLeaveHandler}
//         className="container mx-auto h-full relative"
//       >
//         <div className="flex flex-col lg:flex-row h-full items-center justify-center text-center lg:text-left lg:pt-16">
//           <div className="flex-1 lg:max-h-max order-2 lg:order-none overflow-hidden">
//             {/* Adjust image height to fit mobile screens */}
//             <img className="w-full h-auto" src={WomanImg} alt="" />
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: "-80%" }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: "-80%" }}
//             transition={transition1}
//             className="flex-1 pt-8 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
//           >
//             <h1 className="h1">About me</h1>
//             <p className="mb-12 max-w-sm">
//               {/* Your text content */}
//             </p>
//             <Link to={"/portfolio"} className="btn">
//               View my work
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default About;
