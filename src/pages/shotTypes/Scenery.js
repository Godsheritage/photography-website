import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";
import Scenery0 from "../../img/scenery/Scenery0.jpg";
import Scenery1 from "../../img/scenery/Scenery1.jpg";
import Scenery2 from "../../img/scenery/Scenery2.jpg";
import Scenery3 from "../../img/scenery/Scenery3.jpg";
import Scenery4 from "../../img/scenery/Scenery4.jpg";
import Scenery5 from "../../img/scenery/Scenery5.jpg";
import Scenery6 from "../../img/scenery/Scenery6.jpg";
import Scenery7 from "../../img/scenery/Scenery7.jpg";
import Scenery8 from "../../img/scenery/Scenery8.jpg";
import Scenery9 from "../../img/scenery/Scenery9.jpg";
import Scenery10 from "../../img/scenery/Scenery10.jpg";
import Scenery11 from "../../img/scenery/Scenery11.jpg";
import Scenery12 from "../../img/scenery/Scenery12.jpg";
import Scenery13 from "../../img/scenery/Scenery13.jpg";
import Scenery14 from "../../img/scenery/Scenery14.jpg";
import Scenery15 from "../../img/scenery/Scenery15.jpg";

import Modal from "../../components/Modal";

const Scenery = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const picsArray = [
    Scenery0,
    Scenery1,
    Scenery2,
    Scenery3,
    Scenery4,
    Scenery5,
    Scenery6,
    Scenery7,
    Scenery8,
    Scenery9,
    Scenery10,
    Scenery11,
    Scenery12,
    Scenery13,
    Scenery14,
    Scenery15,
  ];



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        // onMouseEnter={mouseEnterHandler}
        // onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative overflow-y-scroll"
      >
        <h1 className="h1" style={{ textAlign: "center" }}>
          Scenery
        </h1>
        {/* image boxes */}
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
            {picsArray.map(
              (
                sceneryImages,
                index // Change 10 to the number of boxes you want
              ) => (
                <div>
                <img
                  className="object-cover h-80 sm:h-96 lg:h-128 hover:brightness-125 w-full transition-all duration-500"
                  src={sceneryImages}
                  alt=""
                  onClick={() => handleImageClick(sceneryImages)}
                />
                <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  imageSrc={selectedImage}
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

export default Scenery;
