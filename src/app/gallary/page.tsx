// pages/gallery.js
'use client'
import React, { useState } from 'react';
import GalleryComponent from './gallaryforsteps';

const galleries = [
  { name: 'Food Gallery', images: ['FG1.png', 'FG2.png', 'FG3.png','FG4.png'] },
  { name: 'Easy Meal Prepration', images: ['G51.png', 'G52.png', 'G53.png'] },
  { name: 'Book Online Dietitian', images: ['G31.png', 'G32.png', 'G33.png', 'G34.png'] },
  { name: 'Easy Food Delivery', images: ['G21.png', 'G22.png', 'G23.png','G24.png','G25.png'] },
];

const GalleryPage = () => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const handleNextGallery = () => {
    setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % galleries.length);
  };

  return (
    <div className="gallerycontainer">
      <h1>Our Gallery</h1>
      <h1 className="galleryTitle">---{galleries[currentGalleryIndex].name}---</h1>
      <GalleryComponent images={galleries[currentGalleryIndex].images} onNextGallery={handleNextGallery} />
    </div>
  );
};

export default GalleryPage;
