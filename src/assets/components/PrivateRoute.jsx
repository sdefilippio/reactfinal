import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // Ajusta la ruta según sea necesario

const PrivateRoute = ({ element }) => {
  const { token } = useUser();

  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
