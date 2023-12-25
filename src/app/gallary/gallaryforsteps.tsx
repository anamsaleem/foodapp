// components/GalleryComponent.js
'use client'
import React from 'react';
import Image from 'next/image';

interface GalleryComponentProps {
  images: string[];
  onNextGallery: () => void;
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ images, onNextGallery }) => {
  return (
    <div className="gallery-component">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <Image src={`/${image}`} alt={`Image ${index + 1}`} width={900} height={900} className="rounded-image" />
        </div>
      ))}
      <button onClick={onNextGallery} className="gallery-next-button">
        <Image src="/next-button-icon.png" alt="Next" height={900} width={900} />
      </button>
    </div>
  );
};

export default GalleryComponent;
