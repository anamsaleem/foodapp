// components/Item.js
import React from 'react';
import Image from 'next/image';

interface ItemPropsDoc {
  docname: string;
  image: string;
  fees: number;
  description: string;
  onSelect: () => void;
  contact: string; // New prop for the contact information
}

const DocItem: React.FC<ItemPropsDoc> = ({ docname, image, fees, description, onSelect,  contact }) => {


  return (
    <div className="doctor-itemItem">
      <Image src={image} alt={docname} height={900} width={900} />
      <h3>{docname}</h3>
      <p>Fee: ${fees}</p>
      <button onClick={onSelect}>Select For Appointment</button>
      {/* Pass the handleBookNow function to the "Book Now" button */}
    </div>
  );
};

export default DocItem;
