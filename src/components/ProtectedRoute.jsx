import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user || !user.emailVerified) {
    return <Navigate to="/" replace="true" />;
  }
  return children;
};

export default ProtectedRoute;
