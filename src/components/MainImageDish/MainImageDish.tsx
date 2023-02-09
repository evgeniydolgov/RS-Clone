/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './MainImageDishStyles.css';

interface IMainImage {
  name: string;
  url: string;
  id: number;
  onDishClick: (id: number) => void;
}
export const MainImageDish = ({
  name, url, id, onDishClick,
}: IMainImage) => {
  // debugger
  const onClick = () => onDishClick(id);

  return (
    <button type="button" className="one-dish" onClick={onClick}>
      <img src={url} className="dish__img" alt="Dish" />
      <div className="dish-back">
        <h3 className="dish-title">{name}</h3>
        <div className="dish-logo" />
      </div>
    </button>

  );
};
