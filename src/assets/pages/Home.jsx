// src/assets/pages/Home.jsx
import React, { useState } from 'react';
import CardPizza from '../components/CardPizza';  // Asegúrate de la ruta correcta
import '/src/index.css'; // Importamos el CSS correspondiente

const Home = () => {
 
  const [pizzas, setPizzas] = useState([
    { id: 'p001', name: 'Margarita', imgSrc: '/assets/imgs/pizza1.jpg', description: 'Clásica pizza Margarita con tomate y albahaca.', price: 8.99 },
    { id: 'p002', name: 'Pepperoni', imgSrc: '/assets/imgs/pizza2.jpg', description: 'Pizza con pepperoni fresco y crujiente.', price: 10.99 },
    { id: 'p003', name: 'Cuatro Quesos', imgSrc: '/assets/imgs/pizza3.jpg', description: 'Pizza con mezcla de cuatro quesos.', price: 12.99 },
    { id: 'p004', name: 'Hawaiana', imgSrc: '/assets/imgs/pizza4.jpg', description: 'Pizza con piña y jamón.', price: 9.99 },
    { id: 'p005', name: 'Vegetariana', imgSrc: '/assets/imgs/pizza5.jpg', description: 'Pizza con verduras frescas de temporada.', price: 8.99 },
    { id: 'p006', name: 'Barbacoa', imgSrc: '/assets/imgs/pizza6.jpg', description: 'Pizza con salsa barbacoa y carne.', price: 11.99 },
  ]);

  return (
    <div>
      <h1>Bienvenidos a Pizzería Mamma Mía</h1>
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
