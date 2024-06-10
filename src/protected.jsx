// ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Context } from './context';

const ProtectedRoute = () => {
  const { accessToken } = useContext(Context);

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

