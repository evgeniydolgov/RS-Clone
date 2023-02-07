/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './MainImageDishStyles.css';

export const MainImageDish = (props: any) => (
  <div className="one-dish">
    <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" className="dish__img" alt="Dish" />
    <div className="dish-back">
      <h3 className="dish-title">{props.name}</h3>
      <div className="dish-logo" />
    </div>
  </div>

);
