// components/Login.tsx
'use client'
import React, { useState } from 'react';
import ProfilePopup from '../loginprofile/page';
import { ProfileData } from '../loginprofile/profilecom';

interface LoginProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData | null>>;
}

const Login: React.FC<LoginProps> = ({ setShowPopup, setProfileData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', { username, password });

    // For demonstration purposes, let's assume a successful login
    // Replace this with your actual login logic
    const successfulLogin = true;

    if (successfulLogin) {
      setLoggedIn(true);

    }
  };

  return (
    <div className="profilepopup">
      <div className="profilepopup-content">
        {loggedIn ? (
          <ProfilePopup username={username} setShowPopup={setShowPopup} password={''} />
        ) : (
          <>
            <div className="left-half">
              <h2>Login Section</h2>
              <form>
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="button" onClick={handleLogin}>
                  Login
                </button>
              </form>
            </div>

            <div className="right-half">
              <h2>Welcome back!</h2>
              <p>
                Welcome back! We are so happy to have you here. Its great to see you again. We hope you had a safe and enjoyable time away. If you havent already, create an account to get access to exclusive deals.
              </p>
              <button>No account yet? Signup.</button>
            </div>
          </>
        )}

        <span className="closeprofilepopup" onClick={() => setShowPopup(false)}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Login;
