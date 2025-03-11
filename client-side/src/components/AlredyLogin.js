import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const AlredyLogin = ({ children }) => {
  const { user } = useContext(UserContext);

  return !user ? children : <Navigate to="/" />;
};

export default AlredyLogin;
