// pages/index.js
'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const recipes = [
  {
    id: 1,
    name: "Grilled Lemon Herb Chicken Skewers",
    image:"/top1.png",
    ingredients: ["1.5 lbs boneless, skinless chicken breasts, cut into 1-inch cubes", "2 lemons, juiced and zested", "3 tablespoons olive oil ","2 cloves garlic, minced","1 teaspoon dried oregano","1 teaspoon dried thyme","Salt and pepper to taste","Wooden skewers, soaked in water for 30 minutes"],
    description: "In a bowl, combine lemon juice, lemon zest, olive oil, minced garlic, oregano, thyme, salt, and pepper.\n Add the chicken cubes to the marinade, ensuring they are well-coated. Let it marinate for at least 30 minutes. \n Add the chicken cubes to the marinade, ensuring they are well-coated. Let it marinate for at least 30 minutes. \n Preheat the grill to medium-high heat.\n Thread the marinated chicken cubes onto the soaked skewers.\n Grill the skewers for 10-12 minutes, turning occasionally until the chicken is fully cooked and has a nice char.\n Serve hot with your favorite dipping sauce or a side of grilled vegetables."
  },
  {
    id: 2,
    name: "Vegetarian Quinoa Salad Bowl",
    image: "/top4.png",
    ingredients: ["1 cup quinoa, rinsed and cooked", "1 can (15 oz) black beans, drained and rinsed", "1 cup cherry tomatoes, halved","1 cucumber, diced", "1 red bell pepper, diced", "1/4 cup red onion, finely chopped","1/2 cup feta cheese, crumbled","Fresh cilantro, chopped"],
    description: "In a large bowl, combine cooked quinoa, black beans, cherry tomatoes, cucumber, bell pepper, red onion, and feta cheese.\n In a small bowl, whisk together olive oil, balsamic vinegar, Dijon mustard, salt, and pepper to make the dressing.\n Pour the dressing over the quinoa mixture and toss to combine.\n Sprinkle chopped cilantro on top.\n Serve chilled and enjoy a refreshing and nutritious salad bowl."
  },
  {
    id: 3,
    name: "Chocolate Banana Smoothie",
    image: "/top3.png",
    ingredients: ["2 ripe bananas", "1 cup milk (dairy or plant-based)", "1/2 cup Greek yogurt","2 tablespoons cocoa powder","1 tablespoon honey or maple syrup","1/2 teaspoon vanilla extract","Ice cubes (optional)"],
    description: "Peel the bananas and place them in a blender.\n Add milk, Greek yogurt, cocoa powder, honey (or maple syrup), and vanilla extract to the blender.\n Blend until smooth and creamy.\n Add ice cubes and blend again until smooth.\n Pour into glasses and serve immediately."
  },
  // Add more recipes as needed
];

export default function Recipe() {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [isDetailsVisible, setDetailsVisible] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const toggleDetails = () => {
    setDetailsVisible(!isDetailsVisible);
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
  };

  useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      setDetailsVisible(false);
      setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    }, 5000); // Show each recipe for 5 seconds
    setTimerId(timeoutId);

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [currentRecipeIndex, timerId]);

  const currentRecipe = recipes[currentRecipeIndex];

  return (
    <>
      <div className="recipe-container">
        <div className="top-recipe-heading">Top Recipes</div>
        <div className="recipe-content">
          <div className="recipe-image">
            <Image
              src={currentRecipe.image}
              alt={currentRecipe.name}
              height={200}
              width={200}
              className={`recipe-image-${isDetailsVisible ? "big" : "small"}`}
            />
          </div>
          <div className="recipe-info">
            <h3>{`Recipe Name: ${currentRecipe.name}`}</h3>
            <button onClick={toggleDetails} className="read-more-button">
              How to cook
            </button>
            {isDetailsVisible && (
              <div className="recipe-details">
                <p>
                  <strong>Ingredients:</strong> {currentRecipe.ingredients.join(", ")}
                </p>
                <p>
                  <strong>Description:</strong> {currentRecipe.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}