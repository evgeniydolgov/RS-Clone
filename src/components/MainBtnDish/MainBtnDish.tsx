/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './MainBtnDishStyles.css';

export const MainBtnDish = (props: any) => {
  if (props.number % 2 === 0) {
    return (
      <button type="button" className="dish-change first-btn">{props.name}</button>
    );
  }
  return (
    <button type="button" className="dish-change">{props.name}</button>
  );
};
