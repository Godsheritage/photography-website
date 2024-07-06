import { motion } from "framer-motion";
import Modal from "../../components/Modal";
import { transition1 } from "../../transitions";
import React, { useContext, useState } from "react";
import { CursorContext } from "../../context/CursorContext";





const Graduations = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const picsArray = [
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots0.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots1.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots2.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots3.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots4.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots5.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots6.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots7.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots8.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots9.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots10.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots11.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots12.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots13.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots14.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots15.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots16.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots17.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots18.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots19.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots20.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots21.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots22.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots23.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots24.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots25.jpg",
    "https://photographysitebucket.s3.amazonaws.com/Graduation/GradShots27.jpg",
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
                <div>
                  <img
                    className="object-cover h-80 sm:h-96 lg:h-128 hover:brightness-125 w-full transition-all duration-500"
                    src={gradShot}
                    alt=""
                    onClick={() => handleImageClick(gradShot)}
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

export default Graduations;
