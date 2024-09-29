import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CardPizza({ pizza }) {
  const { addToCart } = useCart();

  return (
    <div className="card-pizza">
      <img src={pizza.imgSrc} alt={pizza.name} className="pizza-image" />
      <div className="pizza-info">
        <h3>{pizza.name}</h3>
        <p>Precio: ${pizza.price.toFixed(2)}</p>
        <button className="button-add" onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
        <Link to={`/pizza/${pizza.id}`} className="button-buy">Ver Detalles</Link>
      </div>
    </div>
  );
}

export default CardPizza;
