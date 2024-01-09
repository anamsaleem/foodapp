// pages/index.js
'use Client'
import Link from 'next/link';
import React from 'react';


export default function HeadBoady() {
  return (
      <><div className="right-div">
          <div className="services-container">
              <h2 className="services-title">Services</h2>
              <div className="button-group">
                  <Link href="/foodDeals" className="service-button">Food Deals</Link>
                  <Link href="/recipeNote" className="service-button">Recipe Note</Link>
                  <Link href="/savefood" className="service-button">Online Marketplace</Link>
                    <Link href="/nutritionCalculator" className="service-button">Nutrirnt App</Link>
                  <Link href="/resturantList" className="service-button">Restaurant Directory</Link>
                  <Link href="/videolectures" className="service-button">Cooking & Nutrition Classes </Link>
                  <Link href="/doctors" className="service-button">Online dietitian</Link>
              </div>
          </div>
      </div><div className="left-div">
              <div className="text-container">
                  <h2 className="bold-text">Your One-Stop Food Destination</h2>
                  <p className="small-text">Your gateway to a world of flavors, wellness, and connection. Dive into mouthwatering recipes, stay on top of your nutrition, find the perfect dining spots, shop local, and learn from the experts. Welcome to the One Stop Shop for all your food and health desires.</p>
              </div>
          </div></>

  );
};
