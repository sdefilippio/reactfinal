// src/assets/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Navbar() {
  const { token, logout } = useUser();  // Accede al token y al método logout desde el UserContext

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {token ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>  {/* Botón de cerrar sesión */}
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
