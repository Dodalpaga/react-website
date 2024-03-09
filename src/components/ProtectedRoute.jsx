import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
const ProtectedRoute = ({ children }) => {
  if (!auth.currentUser || !auth.currentUser.emailVerified) {
    return <Navigate to="/login" replace="true" />;
  }
  return children;
};

export default ProtectedRoute;
