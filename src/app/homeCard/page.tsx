// pages/index.tsx
'use client'
import React from 'react';
import Head from 'next/head';
import CardCarousel from './cardcontrol';
import Card from './card';

const cards = [
  {
    heading: "Online Food Ordering",
    text: "Ordering food online is a breeze with a simple click, allowing you to select your favorite dishes from an extensive food list. The convenience of choosing your preferred meals and having them delivered to your doorstep is just a click away. Order now for a delightful dining experience brought straight to you.",
    imageSrc: "/online-food.jpg",
  },
  {
    heading: "Online Dietitian",
    text: "Engaging with an online dietitian is effortless – simply select your preferred dietitian from the available doctors' list. Meetings take place conveniently on Zoom, allowing you to connect virtually and receive personalized dietary guidance. Book your appointment now with just a click for expert advice on maintaining a healthy lifestyle.",
    imageSrc: "/online-dietitian.jpg",
  },
  {
    heading: "Online Food Video Lectures",
    text: "Exploring the world of culinary arts has never been easier with online food video lectures. These virtual classes offer a feast for the eyes and the mind, bringing the art of cooking right into your home. With a simple click, you can access a diverse array of instructional videos covering everything from basic cooking techniques to advanced culinary skills. Learn the art of plating, discover new recipes, and delve into the nuances of different cuisines, all from the convenience of your own kitchen. These online food video lectures cater to both beginners and seasoned chefs, providing valuable insights and tips to elevate your culinary prowess.",
    imageSrc: "/online-vid.jpg",
  },
  {
    heading: "Recipe Notes",
    text: "Keeping recipe notes is a wonderful way to document and personalize your culinary journey. These notes serve as a treasure trove of insights, modifications, and personal preferences that make a recipe truly your own. Whether it's a cherished family recipe or a newfound culinary experiment, jotting down your observations helps refine and perfect your cooking skills. Note the variations you've tried, ingredient substitutions, and any adjustments to cooking times or temperatures. Recipe notes not only act as a practical guide for future endeavors in the kitchen but also serve as a delightful record of your evolving skills and tastes.",
    imageSrc: "/Recipe2.jpeg",
  },
];

const HomeCard = () => {
  return (
    <div className="Cardbody">
      <Head>
        <title>About</title>
      </Head>

      <CardCarousel cards={cards} />
    </div>
  );
};

export default HomeCard;
