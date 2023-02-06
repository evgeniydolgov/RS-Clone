/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './MainImageDishStyles.css';

export const MainImageDish = (props: any) => (
  <div className="one-dish">
    <div className="one-dish_name">{props.name}</div>
  </div>
);
