import React from 'react';
import './card.css'; 

interface CardProps {
  title: string;
  image: string;
  price: number;
  onDelete: () => void;
  onViewDetails: () => void;
}

export function Card({ title, image, price, onDelete, onViewDetails }: CardProps) {
  return (
    <div className="card" onClick={onViewDetails}>
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-price">${price.toFixed(2)}</p>
      <button onClick={onDelete} className="card-delete-btn">Delete</button>
    </div>
  );
}
