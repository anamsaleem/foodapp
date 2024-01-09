// components/PaymentModal.tsx
'use client'
// components/PaymentPopup.tsx
import React from 'react';

interface PaymentPopupProps {
  total: number;
  onClose: () => void;
}

const PaymentPopup: React.FC<PaymentPopupProps> = ({ total, onClose }) => {
  const handleClose = () => {
    onClose();
    window.location.href = '/';
  };

  return (
    <div className="payment-popup-overlay">
      <div className="payment-popup">
        <h2>Order Finished</h2>
        <div className="payment-popup-content">
          <span className="payment-close-popup" onClick={handleClose}>
            &times;
          </span>
          <p>Your total price is ${total.toFixed(2)}</p>
          <p>You can pay cash on delivery to your home address.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
