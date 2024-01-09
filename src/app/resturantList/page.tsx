'use client'
// pages/index.js

import { useState } from 'react';
import { cities, cuisines, restaurants } from './data';
import Image from 'next/image';

interface City {
  id: number;
  name: string;
}

interface Cuisine {
  id: number;
  name: string;
}

interface Restaurant {
  id: number;
  name: string;
  cuisineId: number;
  cityId: number;
  location: string;
  imageUrl: string;
  phoneNumber: string;
}

const IndexPage = () => {
  const [cityName, setCityName] = useState<string>('');
  const [cuisineList, setCuisineList] = useState<Cuisine[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState<number | ''>('');
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleCityNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityName(e.target.value);
  };

  const handleSearchCuisine = () => {
    // Simulate fetching cuisines based on the selected city
    const city: City | undefined = cities.find((city) => city.name === cityName);
    const cityCuisines: Cuisine[] = city
      ? cuisines.filter((cuisine) =>
          restaurants.some(
            (restaurant) => restaurant.cityId === city.id && restaurant.cuisineId === cuisine.id
          )
        )
      : [];
    setCuisineList(cityCuisines);
  };

  const handleSearchRestaurants = () => {
    // Simulate fetching restaurants based on the selected cuisine
    const city: City | undefined = cities.find((city) => city.name === cityName);
    let cityRestaurants: Restaurant[] = [];

    if (city) {
      // Check if selectedCuisine is a number before filtering
      cityRestaurants = selectedCuisine !== ''
        ? restaurants.filter(
          (restaurant) =>
            restaurant.cityId === city.id && restaurant.cuisineId === selectedCuisine
          )
        : restaurants.filter((restaurant) => restaurant.cityId === city.id);
    }

    setRestaurantList(cityRestaurants);
  };

  const handleSelectRestaurant = (restaurantId: number) => {
    // Find the selected restaurant based on the ID
    const selected = restaurantList.find((restaurant) => restaurant.id === restaurantId);
    setSelectedRestaurant(selected || null);
  };

  return (
    <div className="restaurant-container">
      <h1>Restaurant Finder</h1>
      <label>
        Select City:
        <select value={cityName} onChange={handleCityNameChange}>
          <option value="">-- Select a City --</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </label>
      <button className="restaurant-button" onClick={handleSearchCuisine}>
        Search Cuisines
      </button>

      {cuisineList.length > 0 && (
        <div>
          <h2>Available Cuisines:</h2>
          <ul>
            {cuisineList.map((cuisine) => (
              <li key={cuisine.id}>{cuisine.name}</li>
            ))}
          </ul>
        </div>
      )}

      {cuisineList.length > 0 && (
        <div>
          <label>
            Select Cuisine:
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(Number(e.target.value))}
            >
              <option value="">-- Select a Cuisine --</option>
              {cuisineList.map((cuisine) => (
                <option key={cuisine.id} value={cuisine.id}>
                  {cuisine.name}
                </option>
              ))}
            </select>
          </label>
          <button className="restaurant-button" onClick={handleSearchRestaurants}>
            Search Restaurants
          </button>
        </div>
      )}

      {restaurantList.length > 0 && (
        <div>
          <h2>Restaurant List:</h2>
          <ul className="restaurant-list">
            {restaurantList.map((restaurant) => (
              <li
                key={restaurant.id}
                onClick={() => handleSelectRestaurant(restaurant.id)}
                className="restaurant-list-item"
              >
                {restaurant.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedRestaurant && (
        <div className="selected-restaurant-details">
          <h2>Selected Restaurant Details:</h2>
          <p>Name: {selectedRestaurant.name}</p>
          <p>Cuisine: {cuisines.find((cuisine) => cuisine.id === selectedRestaurant.cuisineId)?.name}</p>
          <p>Location: {selectedRestaurant.location}</p>
          <p>Phone Number: {selectedRestaurant.phoneNumber}</p>
          <Image
            height={300}
            width={300}
            src={selectedRestaurant.imageUrl}
            alt={selectedRestaurant.name}
            className="selected-restaurant-image"
          />
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default IndexPage;
