import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";
import studio0 from "../../img/Studio/studio0.jpg";
import studio1 from "../../img/Studio/studio1.jpg";
import studio2 from "../../img/Studio/studio2.jpg";
import studio3 from "../../img/Studio/studio3.jpg";
import studio4 from "../../img/Studio/studio4.jpg";
import studio5 from "../../img/Studio/studio5.jpg";
import studio6 from "../../img/Studio/studio6.jpg";
import studio7 from "../../img/Studio/studio7.jpg";
import studio8 from "../../img/Studio/studio8.jpg";
import studio9 from "../../img/Studio/studio9.jpg";
import studio10 from "../../img/Studio/studio10.jpg";
import studio11 from "../../img/Studio/studio11.jpg";
import studio12 from "../../img/Studio/studio12.jpg";
import studio13 from "../../img/Studio/studio13.jpg";
import studio14 from "../../img/Studio/studio14.jpg";
import studio15 from "../../img/Studio/studio15.jpg";
import studio16 from "../../img/Studio/studio16.jpg";
import studio17 from "../../img/Studio/studio17.jpg";
import studio18 from "../../img/Studio/studio18.jpg";
import studio19 from "../../img/Studio/studio19.jpg";
import studio20 from "../../img/Studio/studio20.jpg";

import Modal from "../../components/Modal";

const Studio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const picsArray = [
    studio0,
    studio1,
    studio2,
    studio3,
    studio4,
    studio5,
    studio6,
    studio7,
    studio8,
    studio9,
    studio10,
    studio11,
    studio12,
    studio13,
    studio14,
    studio15,
    studio16,
    studio17,
    studio18,
    studio19,
    studio20,
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
          Studio
        </h1>
        {/* image boxes */}
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
            {picsArray.map(
              (
                studioShot,
                index // Change 10 to the number of boxes you want
              ) => (
                <div>
                <img
                  className="object-cover h-80 sm:h-96 lg:h-128 hover:brightness-125 w-full transition-all duration-500"
                  src={studioShot}
                  alt=""
                  onClick={() => handleImageClick(studioShot)}
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

export default Studio;
