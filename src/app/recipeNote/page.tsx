'use client'
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../footer/page";
import Link from "next/link";

const ParallelDivs: React.FC = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageURL, setImageURL] = useState("");
  const imageWithBorderClass = "black-div-image";
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [displayedData, setDisplayedData] = useState<
    {
      name: string;
      description: string;
      imageURL: string;
      ingredients: string;
    }[]
  >([]);
  const [selectedDataIndex, setSelectedDataIndex] = useState<number | null>(
    null
  );
  const [favoriteImages, setFavoriteImages] = useState<File[]>([]);
  const [userImage, setUserImage] = useState<File | null>(null);

  const handleAdd = () => {
    if (recipeName && description && ingredients) {
      const newData = {
        name: recipeName,
        description,
        ingredients,
        imageURL: imageFile ? URL.createObjectURL(imageFile) : imageURL,
      };
      setDisplayedData([...displayedData, newData]);
      // Clear the input fields and file
      setRecipeName("");
      setDescription("");
      setIngredients("");
      setImageFile(null);
    }
  };

  const handleDelete = (index: number) => {
    const newData = [...displayedData];
    newData.splice(index, 1);
    setDisplayedData(newData);
    setSelectedDataIndex(null);
  };

  const handleCancel = () => {
    setRecipeName("");
    setDescription("");
    setImageURL("");
    setIngredients("");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageURL(file.name); // Show the uploaded image name in the input field
    }
  };

  const handleFavoriteImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFavoriteImages([...favoriteImages, file]);
    }
  };

  const handleUserImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setUserImage(file);
    }
  };

  return (
    <>
      <h2>Recipe NoteBook</h2>
      <div className="container">
        <div className="pink-div">
          <h2>Add Recipe</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Recipe Name"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-container">
              <textarea
                placeholder="Ingredients (one per line)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Image URL"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
              />
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <label htmlFor="image-upload" className="upload-button">
                Upload Image
              </label>
            </div>
            <button onClick={handleAdd}>Add</button>
            {displayedData.length > 0 && (
              <button onClick={handleCancel}>Cancel</button>
            )}
          </form>
        </div>

        <div className="black-div">
          <h2>Recipe List</h2>
          {displayedData.map((recipe, index) => (
            <div
              key={index}
              className="white-div"
              onClick={() => setSelectedDataIndex(index)}
            >
              <div className="black-div-item-name">Name: {recipe.name}</div>
              <div className="black-div-item-des">
                Description: {recipe.description}
              </div>
              <div className="black-div-item-ingredients">
                Ingredients:
                <ul>
                  {recipe.ingredients.split("\n").map((ingredient, i) => (
                    <li key={i}>{ingredient.trim()}</li>
                  ))}
                </ul>
              </div>
              <Image
                src={recipe.imageURL}
                alt="Recipe"
               /* width="150px"
                height="150px" */
                height={900}
                width={900}
                className={imageWithBorderClass}
              />
              {selectedDataIndex === index && (
                <Image
                height={900}
                width={900}
                 /* height="20px"
                  width="20px" */
                  src="/bin.png"
                  alt="Delete"
                    className="delete-iconRecipe"
                  onClick={() => handleDelete(index)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParallelDivs;
