'use client'
import { useEffect, useState } from 'react';
import  categoriesData  from './data';
import { Category, Item } from './data';
import Image from 'next/image';

interface SelectedItem {
  category: Category;
  item: Item;
  quantity: number;
}
// Component function
export default function Home() {
  // State variables
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [realTotalPrice, setRealTotalPrice] = useState<number>(0);
  const [discountedTotalPrice, setDiscountedTotalPrice] = useState<number>(0);

  // Placeholder for global discount, replace it with the actual discount value
  const globalDiscount = 10; // Example: 10% global discount

  // Handle item selection
  const handleItemSelect = (item: Item, category: Category, quantityChange: number = 1) => {
    const existingItemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem.item.name === item.name && selectedItem.category === category
    );

    if (existingItemIndex !== -1) {
      // If item already exists, update the quantity
      setSelectedItems((prevItems) =>
        prevItems.map((prevItem, index) =>
          index === existingItemIndex
            ? { ...prevItem, quantity: Math.max(0, prevItem.quantity + quantityChange) }
            : prevItem
        )
      );
    } else {
      // If item doesn't exist, add it to selected items
      setSelectedItems((prevItems) => [...prevItems, { category, item, quantity: Math.max(1, quantityChange) }]);
    }
  };

  // Recalculate total prices
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateTotalPrices = () => {
    const realTotal = selectedItems.reduce((acc, selectedItem) => {
      return acc + selectedItem.item.price * selectedItem.quantity;
    }, 0);

    const discountedTotal = selectedItems.reduce((acc, selectedItem) => {
      const itemPrice = selectedItem.item.price;
      const categoryDiscount = selectedItem.category.discount;
      const discountedPrice = itemPrice - (itemPrice * categoryDiscount) / 100;
      return acc + discountedPrice * selectedItem.quantity;
    }, 0);

    setRealTotalPrice(realTotal);
    setDiscountedTotalPrice(discountedTotal);
  };

  // Call calculateTotalPrices whenever selectedItems change
  useEffect(() => {
    calculateTotalPrices();
  }, [selectedItems, calculateTotalPrices]);
  return (
    <div className="fooddeal-container">
       <h1>---Food Discount Categories---</h1>
       <p>Create Customize  Deals with Amazing Discounts</p>
      <div className="fooddeal-categories">
        {categoriesData.map((category) => (
          <div key={category.name} className="fooddeal-category">
            <h2>{category.name}</h2>
            <p>Discount: {category.discount}%</p>
            <ul className="fooddeal-items">
              {category.items.map((item) => (
                <li key={item.name}>
                  <Image src={`/${item.image}`} alt={item.name} height={50} width={50} />
                 {item.name} - Price: ${item.price}
                  <button onClick={() => handleItemSelect(item, category, 1)}>+</button>
                  <button onClick={() => handleItemSelect(item, category, -1)}>-</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="fooddeal-order">
        <h2>Your Order</h2>
        <ul>
          {selectedItems.map((selectedItem, index) => (
           <li key={index}>
           {selectedItem.category.name} - {selectedItem.item.name} - Quantity: {selectedItem.quantity}
         </li>
          ))}
        </ul>
        <p className="fooddeal-totalPrice">Real Total Price: ${realTotalPrice}</p>
        <p className="fooddeal-discountedTotalPrice">Discounted Total Price: ${discountedTotalPrice}</p>
        <button className="fooddeal-placeOrderBtn" onClick={() => alert('Order placed!')}>
          Place Order
        </button>
      </div>
    </div>
  );
}