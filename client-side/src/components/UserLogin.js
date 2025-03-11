import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { UserContext } from './UserContext'; // Adjust the import path as necessary
import { Navigate } from 'react-router-dom';

const UserLogin = () => {
  const [username, setUsername] = useState('Guest');
  const [password, setPassword] = useState('Guest');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { login, logout, user } = useContext(UserContext); // Use UserContext
  const {success,setSuccess} =useState('');
  const {endpoint}=useContext(UserContext)
  // Handle form submission for login
  const handleLoginSubmit = async (e) => {
    if(username==="Guest" && password==="Guest"){
      login({username:"Guest"});
    }
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter your username and password.');
      setTimeout(() => setError(''), 3000);
    } else {
      try {
        const response = await axios.post(`${endpoint}/api/users/loginUser`, {
          username,
          password,
        });

        if (response.data == 'user') {
          const userData=await axios.get(`${endpoint}/api/users/username/${username}`)// Define userData based on response
          console.log(userData)
          login(userData.data); // Use the login function from context
          window.location.href = 'http://localhost:3000'; // Redirect to the main page
        } else {
          setError('Invalid login credentials.');
          setTimeout(() => setError(''), 3000);
        }
      } catch (error) {
        setError('Invalid login credential.');
        setTimeout(() => setError(''), 3000);
      }
    }
  };

  // Handle form submission for register
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !email || !firstName || !lastName) {
      setError('Please fill out all fields.');
      setTimeout(() => setError(''), 3000);
    } else {
      try {
        const response = await axios.post(`${endpoint}/api/users`, {
          username,
          password,
          email,
          firstName,
          lastName,
          role: 'USER', // Set default role to user
        });
        console.log(response.data)
        if (response.data.role=='USER') {
          window.location.href = 'http://localhost:3000/Login';
          setSuccess('Plese Login');
          setTimeout(() => {
            setSuccess('');
          }, 3000);
          setError('');
        } else {
          setError('Please provide a unique email username.');
          setTimeout(() => setError(''), 3000);
        }
      } catch (error) {
        setTimeout(() => setError(''), 3000);
      }
    }
  };

  // Toggle between login and register forms and clear all fields
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear errors when switching forms
    setUsername(''); // Clear username
    setPassword(''); // Clear password
    setEmail(''); // Clear email
    setFirstName(''); // Clear first name
    setLastName(''); // Clear last name
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {user ? ( // Check if user is logged in
        <div className="card p-4 shadow-sm text-center">
          <h2>Welcome, {user.username}!</h2>
          <button className="btn btn-danger mt-4" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {success && (
            <div className="alert alert-success" role="alert">
              {success}
            </div>
          )}
          <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
            {!isLogin && (
              <>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {isLogin ? 'Log In' : 'Register'}
            </button>
            <div className="text-center mt-3">
              <p>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <a
                  href="#"
                  className="text-decoration-none"
                  onClick={toggleForm}
                  style={{ color: 'black' }}
                >
                  {isLogin ? 'Register' : 'Log In'}
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
