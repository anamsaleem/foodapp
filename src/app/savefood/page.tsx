"use client";
// pages/index.js
import React, { useState } from "react";
import Item from "./file";
import Image from "next/image";
import Link from "next/link";
import Cart, { ItemData } from "../cart/page";
import items from "./data";

const SaveHomeItem: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const [cartItems, setCartItems] = useState<ItemData[]>([]);

  const handleSelect = (item: ItemData) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const addToCart = () => {
    if (selectedItem) {
      setCartItems((prevCart) => [...prevCart, selectedItem]);
      setSelectedItem(null);
    }
  };

  return (
    <div className="containerItem">
      <h1>Select Our Menu</h1>
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
            <Image src={selectedItem.image} alt={selectedItem.name} width={900} height={900} />
            <h2>{selectedItem.name}</h2>
            <h3>Price: ${selectedItem.price}</h3>
            <button onClick={addToCart}>Add to Cart</button>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}

      {cartItems.length > 0 && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
    </div>
  );
};

export default SaveHomeItem;