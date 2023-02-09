/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './MainBtnDishStyles.css';

interface IMainBtnDish {
  name: string;
  number: number;
}

export const MainBtnDish = ({ name, number }: IMainBtnDish) => {
  if (number % 2 === 0) {
    return (
      <button type="button" className="dish-change first-btn">{name}</button>
    );
  }
  return (
    <button type="button" className="dish-change">{name}</button>
  );
};
