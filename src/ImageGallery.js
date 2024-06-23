// src/components/ImageGallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import ImageModal from './ImageModal';
import './ImageGallery.css';

const images = [
  'https://tse3.mm.bing.net/th?id=OIP.GoTWg_zzBhMTD803QdG5uQHaEH&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.HgiZkx6EudTL9_eVCqDbkgAAAA&pid=Api&P=0&h=180',
  'https://tse2.mm.bing.net/th?id=OIP.4z2feTp_Mw25d-lmn1wMdQAAAA&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.AofvG1kPcMdnSSTkFc2IfwHaDt&pid=Api&P=0&h=180',
  'https://tse1.mm.bing.net/th?id=OIP.wDQANL0qDjdd1h-U4Qf3vAHaLI&pid=Api&P=0&h=180'
];

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} index={index} openModal={openModal} />
      ))}
      {selectedImageIndex !== null && (
        <ImageModal
          image={images[selectedImageIndex]}
          closeModal={closeModal}
          goToPreviousImage={goToPreviousImage}
          goToNextImage={goToNextImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;
