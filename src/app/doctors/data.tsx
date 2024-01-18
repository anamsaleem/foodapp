// itemsData.ts
interface ItemData {
    docname: string;
    image: string;
    fees: number;
    contact:string;
    description: string;
  }
  
  const items: ItemData[] = [
    {
        docname: "Balanced-Bite",
        image: "/doc1.jpg", // Replace with the actual image path
        fees: 19.99,
        description: `
        Education: B.S. in Nutrition, XYZ University
        Availability: Mon-Fri, 9 AM - 6 PM, Virtual consultations available
        Specializing in balanced and personalized nutrition plans.
        Available for consultations to help you achieve your health goals.
        Email: sarah.turner@nutritionpro.com`,
        contact: "123-456-7890", // Add contact information to the doctor data
      },
      {
        docname: "PurePalatePro",
        image: "/doc2.jpg", // Replace with the actual image path
        fees: 29.99,
        contact: "123-456-7890", // Add contact information to the doctor data
        description: `
        Education: B.S. in Nutrition, XYZ University
        Availability: Mon-Fri, 9 AM - 6 PM, Virtual consultations available
        Specializing in balanced and personalized nutrition plans.
        Available for consultations to help you achieve your health goals.
        Email: sarah.turner@nutritionpro.com`,
    },
      {
        docname: "Culinary-Counselor",
        image:"/doc3.jpg", // Replace with the actual image path
        fees: 40.99,
        description: `
        Education: B.S. in Nutrition, XYZ University
        Availability: Mon-Fri, 9 AM - 6 PM, Virtual consultations available
        Specializing in balanced and personalized nutrition plans.
        Available for consultations to help you achieve your health goals.
        Email: sarah.turner@nutritionpro.com`,
        contact: "123-456-7890", // Add contact information to the doctor data
      },
      {
        docname: "NutriNinja",
        image: "/doc4.jpg", // Replace with the actual image path
        fees: 45.99,
        description: `
        Education: B.S. in Nutrition, XYZ University
        Availability: Mon-Fri, 9 AM - 6 PM, Virtual consultations available
        Specializing in balanced and personalized nutrition plans.
        Available for consultations to help you achieve your health goals.
        Email: sarah.turner@nutritionpro.com`,
        contact: "123-456-7890", // Add contact information to the doctor data
      },
      {
        docname: "HealthHarmony",
        image: "/doc5.jpg", // Replace with the actual image path
        fees: 40.99,
        description: `
        Education: B.S. in Nutrition, XYZ University
        Availability: Mon-Fri, 9 AM - 6 PM, Virtual consultations available
        Specializing in balanced and personalized nutrition plans.
        Available for consultations to help you achieve your health goals.
        Email: sarah.turner@nutritionpro.com`,
        contact: "123-456-7890", // Add contact information to the doctor data
      },
  ];
  
  export default items;
  