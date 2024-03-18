import React, { useState } from 'react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
    
  };

  const handleRegistration = async () => {
    console.log()
    // Here, you would make an API call to your backend (Express/Node.js)
    // to save user data to MongoDB
    // Example: axios.post('/api/register', formData);
  };

  return (
    <div className="registration-page">
      <h1>Register for CareTakers</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationPage;
