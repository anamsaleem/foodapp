"use client";
// pages/index.js
import React, { useEffect, useState } from "react";
import DocItem from "./file";
import Image from "next/image";
import items from "./data";



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
        <h1>Available Dietitian</h1>
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