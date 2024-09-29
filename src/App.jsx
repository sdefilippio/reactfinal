import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Register from './assets/pages/Register';
import Login from './assets/pages/Login';
import Cart from './assets/pages/Cart';
import Pizza from './assets/pages/Pizza';
import Profile from './assets/pages/Profile';
import NotFound from './assets/pages/NotFound';
import Navbar from './assets/components/Navbar';
import { UserProvider } from './assets/context/UserContext';
import { CartProvider } from './assets/context/CartContext';
import './index.css';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} /> {/* Ruta de perfil */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
