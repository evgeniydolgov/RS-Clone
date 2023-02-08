/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './MainImageDishStyles.css';

interface IMainImage {
  name: string;
  url: string;
}
export const MainImageDish = ({ name, url }: IMainImage) => (
  <div className="one-dish">
    <img src={url} className="dish__img" alt="Dish" />
    <div className="dish-back">
      <h3 className="dish-title">{name}</h3>
      <div className="dish-logo" />
    </div>
  </div>

);
