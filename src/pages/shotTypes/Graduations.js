import {motion} from "framer-motion"
import React, {useContext} from 'react'
import { transition1 } from '../../transitions';
import { CursorContext } from '../../context/CursorContext';


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
        className="container mx-auto h-full relative"
      >
    </div>
    </motion.section>
  )
}

export default Graduations