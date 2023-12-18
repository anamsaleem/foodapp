// components/ProfilePopup.tsx
'use client'
import React, { useState } from 'react';
import { ProfileData } from './profilecom';
import Image from 'next/image';
import HeaderTemplet from '../headbodytemplet/page';
interface ProfilePopupProps {
  username: string;
  password: string;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData | string>>;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ username, password, setShowPopup, setProfileData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [fullName, setFullName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveSettings = () => {
    // Implement your logic to save the settings data
    // You can use these values: fullName, contactDetails, address, and email
    const newProfileData = {
      username,
      password,
      fullName,
      contactDetails,
      address,
      email,
    };
    console.log('Settings saved:', { fullName, contactDetails, address, email });
    setProfileData(newProfileData);
    // Close the settings popup after saving
    setShowSettings(false);
  };


  return (
    <div>
      <div className="profiledetailpopup">
        <Image
          className="settings-button"
          src="/iconsettings.png" // Add the path to your settings icon image
          alt="Settings"
          typeof='button'
          height={200}
          width={200}
          onClick={() => setShowSettings(!showSettings)} />
        <div className="profiledetailpopup-content">
          <h2>Welcome, {username}!</h2>
          <p>Thank you for logging in. Here are your profile details:</p>
          <ul>
            <li>
              <strong>Username:</strong> {username}
            </li>
            {fullName && (
              <li>
                <strong>Full Name:</strong> {fullName}
              </li>
            )}
            {contactDetails && (
              <li>
                <strong>Contact Details:</strong> {contactDetails}
              </li>
            )}
            {address && (
              <li>
                <strong>Address:</strong> {address}
              </li>
            )}
            {address && (
              <li>
                <strong>Email:</strong> {email}
              </li>
            )}
            <li>
              <strong>Password:</strong> {showPassword ? password : ''}
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide Password' : 'Show Password'}
              </button>
            </li>
          </ul>

          {showSettings && (
            <div className="settings-popup">
              <h3>Settings</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)} />
              <input
                type="text"
                placeholder='Contact e.g. "123-456-7890"'
                value={contactDetails}
                onChange={(e) => setContactDetails(e.target.value)} />
              <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <button onClick={handleSaveSettings}>Save</button>
            </div>
          )}

          <span className="closeprofiledetailpopup" onClick={() => setShowPopup(false)}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
