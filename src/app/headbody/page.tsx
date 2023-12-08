// pages/index.js
'use Client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Header() {
  return (
    <div className="outercontainer">
      <div className="button-container">
        <Image src="/logo4.png"  className="logo" height="200" width="200" alt="Logo " />
        <div className="nav-buttons">
          <Link href="/" className="nav-button">Home</Link>
          <Link href="/homebody" className="nav-button">Services</Link>
          <Link href="/contect" className="nav-button">Contact</Link>
          <Link href="/" className="nav-button">About</Link>
        </div>
        <Link href="#" className="login-button">
          <Image src="/login 3.png"   height="20" width="20" alt="Login" />
        </Link>
      </div>
      
      <Image className="image"   height="950" width="950" src="/image3.png" alt="" />
    </div>
  );
};
