// src/assets/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; 
import { useUser } from '../context/UserContext'; 

function Cart() {
  const { cart, totalPrice, removeFromCart } = useCart();
  const { token } = useUser();

  const handlePurchase = async () => {
    try {
      const response = await fetch('/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) throw new Error('Purchase failed');

      const result = await response.json();
      alert('Compra realizada con éxito!');  // Mensaje de éxito
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((pizza) => (
              <li key={pizza.id} className="cart-item">
                <span>{pizza.name} - ${pizza.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button disabled={!token} onClick={handlePurchase} className="button-buy">
            Pagar
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
