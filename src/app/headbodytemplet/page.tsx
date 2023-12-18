// pages/index.js
'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image';
import Login from "../login/page"; // Import the Login component
import { ProfileData } from "../loginprofile/profilecom";

export default function HeaderTemplet() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
  
      <div className="button-containertemplet">
        <Image src="/logo4.png"  className="logo" height="200" width="200" alt="Logo " />
        <div className="nav-buttons">
          <Link href="/toprecipes" className="nav-button">Home</Link>
          <Link href="/homebody" className="nav-button">Services</Link>
          <Link href="/" className="nav-button">Contact</Link>
          <Link href="/profile" className="nav-button">About</Link>
        </div>
        <button className="login-button" onClick={handleLoginButtonClick}>
          <Image src="/login 3.png" alt="Login" width="50" height="30" />
        </button>
          {/* Conditionally render the login popup */}
      {showLoginPopup && <Login setShowPopup={setShowLoginPopup} setProfileData={function (value: React.SetStateAction<ProfileData | null>): void {
        throw new Error("Function not implemented.");
      } } />}
      </div>
  );
};
