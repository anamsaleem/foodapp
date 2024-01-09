// itemsData.ts
interface ItemData {
    name: string;
    image: string;
    price: number;
    description: string;
  }
  
  const items: ItemData[] = [
    {
      name: "Italien Pizza",
      image: "/pizza.jpg",
      price: 19.99,
      description: "Description for Item 1 ",
    },
    {
      name: "Fruit Smoothies",
      image: "/smoothies.jpg",
      price: 29.99,
      description: "Description for Item 2...",
    },
    {
      name: "Beef Burger",
      image: "/burger.jpg",
      price: 40.99,
      description: "Description for Item 3",
    },
    {
      name: "Grilled Sandwich",
      image: "/sandwich.jpg",
      price: 45.99,
      description: "Description for Item 4",
    },
    {
      name: "Mix Fruits",
      image: "/fruits.png",
      price: 40.99,
      description: "Description for Item 5",
    },
  ];
  
  export default items;
  