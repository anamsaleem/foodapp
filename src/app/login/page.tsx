// components/LoginPopup.js
'use client'
import { useState } from 'react';
import ProfilePopup from '../loginprofile/page';
import users, { UserData } from './data';

interface LoginPopupProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleLoginSuccess: (user: UserData) => void; // Add handleLoginSuccess prop
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowPopup, handleLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    const user: UserData | undefined = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Successful login
      console.log('Login successful for user:', user);
      setLoggedIn(true);
      setLoginError('');
      handleLoginSuccess(user); // Call handleLoginSuccess with the user object
    } else {
      // Failed login
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="profilepopup">
      <div className="profilepopup-content">
        {loggedIn ? (
          <ProfilePopup
            username={username}
            setShowPopup={setShowPopup}
            password={''}
            setProfileData={(value) => {
              // Add any logic for setting profile data if needed
              console.log('Setting profile data:', value);
            }}
          />
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
                {loginError && <p className="error-message">{loginError}</p>}
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

export default LoginPopup;
