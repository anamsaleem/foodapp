// data.js

export const cities = [
    { id: 1, name: 'Islamabad' },
    { id: 2, name: 'Rawalpindi' },
    // Add more cities as needed
  ];
  
  export const cuisines = [
    { id: 1, name: 'Italian' },
    { id: 2, name: 'Mexican' },
    { id: 3, name: 'Pakistani' }, // New cuisine
    { id: 4, name: 'Fast Food' }, // New cuisine
    { id: 5, name: 'Barbecue' }, // New cuisine
  ];
  
  export const restaurants = [
    // Italian Restaurants in Karachi
    { id: 1, name: 'Italian Restaurant ', cuisineId: 1, cityId: 1, location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890'  },
    { id: 2, name: 'Italian Pizza Place ', cuisineId: 1, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map2.PNG', phoneNumber: '123-456-7890' },
    { id: 3, name: 'Karachi Pasta Haven', cuisineId: 1, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 4, name: 'Ristorante Italiano', cuisineId: 1, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map2.PNG', phoneNumber: '123-456-7890' },
  
    // Mexican Restaurants in Lahore
    { id: 5, name: 'Lahorei Mexican Delight', cuisineId: 2, cityId: 2 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 6, name: 'Spicy Tacos ', cuisineId: 2, cityId: 2 , location: '123 Main St, Karachi', imageUrl:'/map1.PNG', phoneNumber: '123-456-7890'  },
    { id: 7, name: 'Burrito Bar', cuisineId: 2, cityId: 2 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 8, name: 'Salsa Spot', cuisineId: 2, cityId: 2, location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890'  },
  
    // Pakistani Restaurants in Karachi
    { id: 9, name: 'Desi Khana', cuisineId: 3, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 10, name: 'Biryani Bliss', cuisineId: 3, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 11, name: 'Pakistani Tandoor Magic ', cuisineId: 3, cityId: 1, location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890'  },
    { id: 12, name: 'Karachi Karahi Corner', cuisineId: 3, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
  
    // Fast Food Restaurants in Lahore
    { id: 13, name: 'Fast Bites', cuisineId: 4, cityId: 2 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 14, name: 'Quick Bytes In', cuisineId: 4, cityId: 2 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 15, name: 'Fast Feast', cuisineId: 4, cityId: 2 , location: '123 Main St, Karachi', imageUrl:'/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 16, name: 'Burger Bonanza', cuisineId: 4, cityId: 2 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890'  },
  
    // Barbecue Restaurants in Karachi
    { id: 17, name: 'BBQ Delight', cuisineId: 5, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 18, name: 'Smoky Grills ', cuisineId: 5, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 19, name: 'Barbecue Haven', cuisineId: 5, cityId: 1 , location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890' },
    { id: 20, name: 'Sizzling Karachi BBQ', cuisineId: 5, cityId: 1, location: '123 Main St, Karachi', imageUrl: '/map1.PNG', phoneNumber: '123-456-7890'  },
  
    // Add more cuisines and generate restaurants as needed
  ];