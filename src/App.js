import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useContext } from "react";
import { HashRouter } from "react-router-dom";
import AnimRoutes from "./components/AnimRoutes";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <HashRouter>
        <Header />
        <AnimRoutes />
      </HashRouter>
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </>
  );
};

export default App;
