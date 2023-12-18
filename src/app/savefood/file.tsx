// components/Item.js
import React from 'react';
import Image from 'next/image';


interface ItemProps {
  name: string;
  image: string;
  price: number;
  description: string;
  onSelect: () => void; // New prop for handling the "Select" button click
}

const Item: React.FC<ItemProps> = ({ name, image, price, description, onSelect }) => {
  return (
    <div className="itemItem">
      <Image src={image} alt={name} height={900} width={900} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={onSelect}>Select</button>
    </div>
  );
};

export default Item;
