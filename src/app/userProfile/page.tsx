// pages/UserProfile.tsx
import React from 'react';
import { useRouter } from 'next/router';

const UserProfile = () => {
    const contact = ""; // Declare the 'contact' variable

    return (
        <div>
            <h2>User Profile</h2>
            {contact ? (
                <div>
                    <p>Contact Information: {contact}</p>
                    {/* Add more profile details as needed */}
                </div>
            ) : (
                <p>No contact information available</p>
            )}
        </div>
    );
};

export default UserProfile;
