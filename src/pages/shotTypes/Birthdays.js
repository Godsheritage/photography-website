import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import Modal from "../../components/Modal";

import { transition1 } from "../../transitions";
import { CursorContext } from "../../context/CursorContext";
import birthdayShoot0 from "../../img/birtdays/birthdayShot0.jpg";
import birthdayShoot5 from "../../img/birtdays/birthdayShot5.jpg";
import birthdayShoot2 from "../../img/birtdays/birthdayShot2.jpg";
import birthdayShoot3 from "../../img/birtdays/birthdayShot3.jpg";
import birthdayShoot4 from "../../img/birtdays/birthdayShot4.jpg";
import birthdayShoot6 from "../../img/birtdays/birthdayShot6.jpg";
import birthdayShoot7 from "../../img/birtdays/birthdayShot7.jpg";
import birthdayShoot8 from "../../img/birtdays/birthdayShot8.jpg";

const Birthdays = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const picsArray = [
    birthdayShoot0,
    birthdayShoot2,
    birthdayShoot5,
    birthdayShoot3,
    birthdayShoot4,
    birthdayShoot6,
    birthdayShoot7,
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
          Birthdays
        </h1>
        {/* image boxes */}
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
            {picsArray.map(
              (
                birthdayShot,
                index // Change 10 to the number of boxes you want
              ) => (
                <div>
                  <img
                    className="object-cover h-80 sm:h-96 lg:h-128 hover:brightness-125 w-full transition-all duration-500"
                    src={birthdayShot}
                    alt=""
                    onClick={() => handleImageClick(birthdayShot)}
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

export default Birthdays;
