// src/components/LogoutButton.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const LogoutButton = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/Login');
  };

  return (
    <li className="nav-item dropdown me-1">
      <a
        className="nav-link dropdown-toggle d-flex justify-content-center align-items-center"
        id="logoutDropdown"
        href="#"
        data-bs-toggle="dropdown"
      >
        <i className="mdi mdi-logout mx-0" />
        <span className="dropdown-toggle-split" />
      </a>
      <div
        className="dropdown-menu dropdown-menu-right navbar-dropdown"
        aria-labelledby="logoutDropdown"
      >
        <a className="dropdown-item" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </li>
  );
};

export default LogoutButton;
