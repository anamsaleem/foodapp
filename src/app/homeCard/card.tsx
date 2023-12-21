// components/Card.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface CardProps {
  heading: string;
  text: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ heading, text, imageSrc }) => {
  const [isHovered, setHovered] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };

  const handleReadMore = () => {
    setExpanded(!isExpanded);
  };

  const truncatedText = isExpanded ? text : `${text.slice(0, 150)}...`;

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
        <text>Our Motivation</text>
      <div className="card-content">
        <div className="text-section">
          <h2>{heading}</h2>
          <p>{truncatedText}</p>
          {!isExpanded && (
            <button onClick={handleReadMore}>Read More</button>
          )}
          {isExpanded && (
            <button onClick={handleReadMore}>Read Less</button>
          )}
        </div>
        <div className="image-section">
          <Image src={imageSrc} alt="Card Image" height={900} width={900} />
        </div>
      </div>
    </div>
  );
};

export default Card;
