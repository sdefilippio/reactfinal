import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Pizza() {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);

 
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        
        const response = await fetch(`/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error fetching pizza:', error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <p>Cargando pizza...</p>; 

  return (
    <div>
      <h2>{pizza.name}</h2>
      <img src={pizza.imgSrc} alt={pizza.name} />
      <p>{pizza.description}</p>
      <p>Precio: ${pizza.price.toFixed(2)}</p>
    </div>
  );
}

export default Pizza;
