import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({product}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/taller-refuerzo-wilmer-castro/misproductos/${product.id}`);
  };
  return (
    <div onClick={handleNavigate} key={product.id} className="card">
        <h3>{product.title}</h3>
        <p>Precio: ${product.price}</p>
        <img src={product.thumbnail} alt="" />
    </div>
  )
}

export default Card