// public/images/data.ts
export interface Item {
  name: string;
  image: string;
  price: number; // Add the price property
}

export interface Category {
  name: string;
  discount: number;
  items: Item[];
}

const categories: Category[] = [
  {
    name: 'Appetizers',
    discount: 10,
    items: [
      { name: 'Cheese Pops', image: 'CheesePops.jpeg', price: 3 },
      { name: 'Corn Soup', image: 'CornSoup.jpeg', price: 2 },
      { name: 'Garlic Wings', image: 'GarlicWings.jpeg', price: 3 },
    ],
  },
  {
    name: 'Main Course',
    discount: 15,
    items: [
      { name: 'Mutton Biryani', image: 'biryani.jpeg', price: 5 },
      { name: 'Chicken Karahi', image: 'ChickenKarahi.jpeg', price: 5 },
      { name: 'Palak Paneer', image: 'PalakPaneer.jpeg', price: 5 },
      { name: 'Lamb Kofta', image: 'LambKofta.jpeg', price: 5 },
      { name: 'Daal Makhni', image: 'DaalMakhni.jpeg', price: 5 },
    ],
  },
  {
    name: 'Desserts',
    discount: 20,
    items: [
      { name: 'Ice Cream', image: 'IceCream.jpeg', price: 5 },
      { name: 'Gulab Jamun', image: 'GulabJamun.jpeg', price: 5 },
      { name: 'Kheer Elegance', image: 'KheerElegance.jpeg' , price: 5},
      { name: 'Ras Malai', image: 'RasMalai.jpeg', price: 5 },
    ],
  },
  {
    name: 'Cold Drinks',
    discount: 20,
    items: [
      { name: 'Mint Margarita', image: 'MintMargarita.jpeg', price: 5 },
      { name: 'Lemonade', image: 'Lemonade.jpeg', price: 5 },
      { name: 'Coca Cola', image: 'cocacola.jpeg' , price: 5},
    ],
  },
  {
    name: 'Extras',
    discount: 30,
    items: [
      { name: 'Yogurt Dip', image: 'YogurtDip.jpeg', price: 5 },
      { name: 'Mint Chutney', image: 'MintChutney.jpeg', price: 5 },
      { name: 'Garlic mayo', image: 'Garlicmayo.jpeg' , price: 5},
    ],
  },
];

export default categories;
