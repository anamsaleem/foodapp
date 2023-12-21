import React from "react";
import { useLocation } from "react-router-dom";
import Image from "next/image";

const PostPage: React.FC = () => {
  const location = useLocation();
  const { recipe } = location.state as { recipe: any }; // Adjust the type accordingly

  return (
    <>
      <h2>Posted Recipe</h2>
      <div>
        <p>Name: {recipe.name}</p>
        <p>Description: {recipe.description}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <Image src={recipe.imageURL} alt="Recipe" height={900}  width={900}/>
      </div>
    </>
  );
};

export default PostPage;

