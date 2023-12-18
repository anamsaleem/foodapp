// pages/index.js
'use client'
import React, { useState } from "react";
import Image from "next/image";
export default function Recipe() {
  const [isDetailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!isDetailsVisible);
  };
  
  return (
    <>
      <div className="recipe-container">
        <div className="top-recipe-heading">Top Recipes</div>
        <div className="recipe-content">
          <div className="recipe-image">
            <Image
              src="/image2.png"
              alt="Recipe"
              height={200}
              width={200}
              className={`recipe-image-${isDetailsVisible ? "big" : "small"}`}
            />
          </div>
          <div className="recipe-info">
            <h3>Recipe Name : Fish Fry with Seasoned Salad</h3>
            <button onClick={toggleDetails} className="read-more-button">
              How to cook
            </button>
            {isDetailsVisible && (
              <div className="recipe-details">
                <p>
                  <strong>Ingredients:</strong> Ingredient 1, Ingredient 2,
                  Ingredient 3, Ingredient 1, Ingredient 2,
                  Ingredient 3,Ingredient 1, Ingredient 2,
                  Ingredient 3Ingredient 1, Ingredient 2,
                  Ingredient 3
                </p>
                <p>
                  <strong>Description:</strong> This is a delicious recipe. This
                  is a delicious recipe. This is a delicious recipe. This is a
                  delicious recipe.This is a delicious recipe. This
                  is a delicious recipe. This is a delicious recipe. This is a
                  delicious recipe.This is a delicious recipe. This
                  is a delicious recipe. This is a delicious recipe. This is a
                  delicious recipe.This is a delicious recipe. This
                  is a delicious recipe. This is a delicious recipe. This is a
                  delicious recipe.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
