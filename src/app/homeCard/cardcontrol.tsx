// components/CardCarousel.tsx
import React, { useState } from 'react';
import Card from './card';
import Image from 'next/image';

interface CardProps {
  heading: string;
  text: string;
  imageSrc: string;
}

interface CardCarouselProps {
  cards: CardProps[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="card-carousel">
      <div className="carousel-container">
        <div className="card-with-buttons">
          <button className="prev-button" onClick={handlePrev}>
          <Image src="/previous-button-icon.png" alt="Previous" height={900} width={900}/>
          </button>
          <Card {...cards[currentIndex]} />
          <button className="next-button" onClick={handleNext}>
          <Image src="/next-button-icon.png" alt="Next" height={900} width={900} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
