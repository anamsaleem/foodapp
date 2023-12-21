"use client";
// pages/index.js
import React, { useState } from "react";
import Item from "./file";
import Image from "next/image";

const items = [
  {
    name: "Itelien Pizza",
    image: "/pizza.jpg", // Replace with the actual image path
    price: 19.99,
    description: "Description for Item 1 ",
  },
  
  {
    name: "Fruit Smoothies",
    image: "/smoothies.jpg", // Replace with the actual image path
    price: 29.99,
    description:
      "Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2vDescription for Item 2Description for Item 2 ",
  },
  {
    name: "Beef Burger",
    image: "/burger.jpg", // Replace with the actual image path
    price: 40.99,
    description: "Description for Item 3",
  },
  {
    name: "Grilled Sandwich",
    image: "/sandwich.jpg", // Replace with the actual image path
    price: 45.99,
    description: "Description for Item 3",
  },
  {
    name: "Mix Fruites",
    image: "/fruits.png", // Replace with the actual image path
    price: 40.99,
    description: "Description for Item 3",
  },
];

interface ItemData {
  name: string;
  image: string;
  price: number;
  description: string;
}

const SaveHomeItem = () => {
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  const handleSelect = (item: ItemData) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };
  return (
    <div className="containerItem">
      <h1>Select Our  Menu</h1>
      {items.map((item, index) => (
        <div key={index} className="columnItem">
          <Item {...item} onSelect={() => handleSelect(item)} />
        </div>
      ))}

      {selectedItem && (
        <div className="popupfood">
          <div className="popupfood-content">
            <span className="closepopupfood" onClick={handleClosePopup}>
              &times;
            </span>
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              width={900}
              height={900}
            />
              <h2>{selectedItem.name}</h2>
              <h3>Price: ${selectedItem.price}</h3>
              <button>Add to Cart</button>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaveHomeItem;
