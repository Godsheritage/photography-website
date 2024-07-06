import { motion } from "framer-motion";
import Modal from "../../components/Modal";
import { transition1 } from "../../transitions";
import React, { useContext, useState } from "react";
import { CursorContext } from "../../context/CursorContext";


const Scenery = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const picsArray = [

    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery0.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery1.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery2.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery3.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery4.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery5.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery6.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery7.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery8.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery9.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery10.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery11.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery12.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery13.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery14.jpg",
    "https://photographysitebucket.s3.amazonaws.com/scenery/Scenery15.jpg",
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
