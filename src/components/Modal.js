import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc, alt }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-15 flex items-center justify-center" onClick={handleClose}>
      <div className="rounded-lg shadow-lg">
        <img src={imageSrc} alt={alt} className="max-w-xs max-h-xs" />
      </div>
    </div>
  );
};

export default Modal;
