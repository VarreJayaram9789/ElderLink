import React, { useState } from 'react';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    // Here, you would make an API call to your backend (Express/Node.js)
    // to authenticate user credentials
    // Example: axios.post('/api/login', loginData);
  };

  return (
    <div className="login-page">
      <h1>Login to ElderLink</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={loginData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
  