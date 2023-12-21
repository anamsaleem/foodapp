// pages/index.tsx
'use client'
import React, { useState } from 'react';
import Login from '../login/page';
import ProfilePopup from './page';

export interface ProfileData {
  username: string;
  password: string;
  fullName?: string;
  contactDetails?: string;
  address?: string;
  email?: string;
}

const IndexPage: React.FC = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  

  const handleLoginSuccess = (data: ProfileData | null) => {
    setProfileData(data);
    setShowLoginPopup(false);
    setShowProfilePopup(true);
  };

  return (
    <div>
      <button onClick={() => setShowLoginPopup(true)}>Open Login Popup</button>

      {showLoginPopup && (
        <Login setShowPopup={setShowLoginPopup} setProfileData={setProfileData} />
      )}

      {showProfilePopup && profileData && (
        <ProfilePopup
          username={profileData.username}
          setShowPopup={setShowProfilePopup}
          password={''} // Assuming you have a password value here
          setProfileData={function (value: React.SetStateAction<string | ProfileData>): void {
            throw new Error('Function not implemented.');
          } }      
        />
      )}
    </div>
  );
};

export default IndexPage;
