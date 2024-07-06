import { motion } from "framer-motion";
import { transition1 } from "../../transitions";
import React, { useContext, useState } from "react";
import { CursorContext } from "../../context/CursorContext";

import Modal from "../../components/Modal";

const Studio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const picsArray = [
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio0.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio1.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio2.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio3.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio4.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio5.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio6.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio7.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio8.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio9.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio10.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio11.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio12.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio13.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio14.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio15.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio16.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio17.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio18.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio19.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Studio/studio20.jpg",
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
