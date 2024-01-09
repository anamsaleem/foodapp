// pages/cart.js
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import PaymentPopup from '../payment/page';

export interface ItemData {
  name: string;
  image: string;
  price: number;
  description: string;
}

interface CartProps {
  cartItems?: ItemData[];
  setCartItems: React.Dispatch<React.SetStateAction<ItemData[]>>;
}

const Cart: React.FC<CartProps> = ({ cartItems = [], setCartItems }) => {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const handleGoToPayment = () => {
    setShowPaymentPopup(true);
  };

  const handleClosePopup = () => {
    setShowPaymentPopup(false);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems && cartItems.map((item, index) => (
          <li key={index}>
             <button onClick={() => removeFromCart(index)}>X</button>
            <Image src={item.image} alt={item.name} width={50} height={50} />
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
      <button onClick={handleGoToPayment}>Go to payment</button>

      {showPaymentPopup && (
        <PaymentPopup total={calculateTotal()} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Cart;
