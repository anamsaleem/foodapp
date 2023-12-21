// components/Profile.tsx
import React, { useState } from 'react';
import ProfilePopup from './page';
import { ProfileData } from './profilecom';

interface ProfileProps {
  profileData: {
    username: string;
    password: string;
  } | null;
  setProfileData: React.Dispatch<React.SetStateAction<{
    username: string;
    password: string;
  } | null>>;
}

const Profile: React.FC<ProfileProps> = ({ profileData, setProfileData }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {/* Button to open the profile popup */}
      <button onClick={() => setShowPopup(true)}>Open Profile Popup</button>

      {/* Render the profile popup */}
      {showPopup && profileData && (
        <ProfilePopup
          username={profileData.username}
          password={profileData.password}
          setShowPopup={setShowPopup} setProfileData={function (value: React.SetStateAction<string | ProfileData>): void {
            throw new Error('Function not implemented.');
          } }          
        />
      )}

      {/* Add more profile details rendering if needed */}
      <div>
        <strong>Username:</strong> {profileData?.username}
      </div>
      {/* Add more profile details rendering as needed */}
    </div>
  );
};

export default Profile;
