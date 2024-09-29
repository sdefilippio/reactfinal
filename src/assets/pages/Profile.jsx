// src/assets/pages/Profile.jsx
import React from 'react';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { email, logout } = useUser();

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Email: {email}</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
