// src/Components/LoginForm/LoginForm.jsx
import React, { useState } from 'react'; // Make sure to import useState
import './LoginForm.css';

function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="content">
          <h1>Turn Your Ideas into Reality</h1>
          <p>Start for free and get attractive offers from the community</p>
        </div>
      </div>
      <div className="login-right">
        <div className="login-box">
          {isRegistering ? (
            <>
              <h2>Register</h2>
              <p>Create an account to get started!</p>
              <form>
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" required />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input type="password" required />
                </div>
                <button type="submit" className="login-button">Register</button>
              </form>
              <p>
                Already have an account? <span onClick={toggleForm} className="toggle-form">Log in</span>
              </p>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <p>Welcome Back! Please enter your details.</p>
              <form>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input type="password" required />
                </div>
                <div className="options">
                  <label>
                    <input type="checkbox" />
                    Remember me for 30 days
                  </label>
                  <a href="/">Forgot Password?</a>
                </div>
                <button type="submit" className="login-button">Log in</button>
              </form>
              <button className="google-login">
                Sign In With Google
              </button>
              <p>
                Don’t have an account? <span onClick={toggleForm} className="toggle-form">Sign up for free</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
