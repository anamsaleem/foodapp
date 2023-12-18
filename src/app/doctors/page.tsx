"use client";
// pages/index.js
import React, { useEffect, useState } from "react";
import DocItem from "./file";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    docname: "Balanced-Bite",
    image: "/doc1.jpg", // Replace with the actual image path
    fees: 19.99,
    description: "Description for Item 1 ",
    contact: "123-456-7890", // Add contact information to the doctor data
  },
  {
    docname: "PurePalatePro",
    image: "/doc2.jpg", // Replace with the actual image path
    fees: 29.99,
    contact: "123-456-7890", // Add contact information to the doctor data
    description:
      "Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2Description for Item 2vDescription for Item 2Description for Item 2 ",
  },
  {
    docname: "Culinary-Counselor",
    image:"/doc3.jpg", // Replace with the actual image path
    fees: 40.99,
    description: "Description for Item 3",
    contact: "123-456-7890", // Add contact information to the doctor data
  },
  {
    docname: "NutriNinja",
    image: "/doc4.jpg", // Replace with the actual image path
    fees: 45.99,
    description: "Description for Item 3",
    contact: "123-456-7890", // Add contact information to the doctor data
  },
  {
    docname: "HealthHarmony",
    image: "/doc5.jpg", // Replace with the actual image path
    fees: 40.99,
    description: "Description for Item 3",
    contact: "123-456-7890", // Add contact information to the doctor data
  },
];

interface DocItemData {
    docname: string;
    image: string;
    fees: number;
    description: string;
    contact: string; // Add contact information to the doctor data
  }
  
  const HomeDocItem = () => {
    const [selectedItem, setSelectedItem] = useState<DocItemData | null>(null);
    const [isBookingDisabled, setIsBookingDisabled] = useState(false);
  
    const handleSelect = (item: DocItemData) => {
      setSelectedItem(item);
    };
  
    const handleBookNow = () => {
        // Display an alert message when the "Book Now" button is clicked
        alert("We will listen to your booking request and will meet later.");
    
        // Disable the button for 5 seconds
        setIsBookingDisabled(true);
        setTimeout(() => {
          setIsBookingDisabled(false);
        }, 10000); // 5000 milliseconds (5 seconds) "Book Now" button is disabled 
        /*24 * 60 * 60 * 1000); // 24 hours in milliseconds*/
      };
    const handleClosePopup = () => {
      setSelectedItem(null);
    };
  
    return (
      <div className="doctor-containerItem">
        {items.map((item, index) => (
          <div key={index} className="doctor-columnItem">
            <DocItem {...item} onSelect={() => handleSelect(item)} />
          </div>
        ))}
  
        {selectedItem && (
          <div className="doctor-popup">
            <div className="doctor-popup-content">
              <span className="doctor-closepopup" onClick={handleClosePopup}>
                &times;
              </span>
              <Image src={selectedItem.image} alt={selectedItem.docname} width={900} height={900} />
              <h2>{selectedItem.docname}</h2>
            <h3>Fee pr Session: ${selectedItem.fees}</h3>
            {/* Use Link to navigate to UserProfile page with contact information as a query parameter */}
            <button onClick={handleBookNow} disabled={isBookingDisabled}>
              {isBookingDisabled ? "Booking..." : "Book Now"}
            </button>
            <p>{selectedItem.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default HomeDocItem;