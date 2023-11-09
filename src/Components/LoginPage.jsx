import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('https://localhost:7102/api/User/verify', {
        Email: email,
        Password: password,
      });

      if (response.data === 'Wrong Password' || response.data === 'Not Found') {
        setErrorMessage('Verification unsuccessful');
        console.log("verification failed");
      } else {
        navigate('/TablePage');
        console.log("verification success");
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Enter Email And Password');
    }
  };

  return (
    <div className='login-banner-container'>
      <div className="login-box">
        <div className="login-box-head">
          <h2>Please Login</h2>
        </div>
        <div className="login-contents">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="submit-section">
              <button type="submit">Login</button>
            </div>
            <div className='warning-section'>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
