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
      description: `
      **Vendor Name: FlavorFusion Bites**
      Product Name:  "Italien Pizza"
      Size: Medium (12 to 14 inches)
      Phone: 1-800-QKBITES
      Customer Support: support@quickbiteonline.com 
      Instagram: @FlavorFusionBites`,
    },
    {
      name: "Fruit Smoothies",
      image: "/smoothies.jpg",
      price: 29.99,
      description: `
      **Vendor Name: FlavorFusion Bites**
      Product Name:  "Fruit Smoothies"
      Size: Large Glass 
      Phone: 1-800-QKBITES
      Customer Support: support@quickbiteonline.com 
      Instagram: @FlavorFusionBites`,
    },
    {
      name: "Beef Burger",
      image: "/burger.jpg",
      price: 40.99,
      description: `
      **Vendor Name: FlavorFusion Bites**
      Product Name:  "Beef Burger"
      Size: Medium (7-9 inches)
      Phone: 1-800-QKBITES
      Customer Support: support@quickbiteonline.com 
      Instagram: @FlavorFusionBites`,
    },
    {
      name: "Grilled Sandwich",
      image: "/sandwich.jpg",
      price: 45.99,
      description: `
      **Vendor Name: FlavorFusion Bites**
      Product Name:  "Grilled Sandwich"
      Size: Large (3 pic)
      Phone: 1-800-QKBITES
      Customer Support: support@quickbiteonline.com 
      Instagram: @FlavorFusionBites`,
    },
    {
      name: "Mix Fruits",
      image: "/fruits.png",
      price: 40.99,
      description: `
      **Vendor Name: FlavorFusion Bites**
      Product Name:  "Mix Fruits"
      Size: Medium Bag (12 to 14 pic)
      Phone: 1-800-QKBITES
      Customer Support: support@quickbiteonline.com 
      Instagram: @FlavorFusionBites`,
    },
  ];
  
  export default items;
  