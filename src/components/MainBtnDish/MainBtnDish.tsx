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
      <option value="1"><button type="button" className="dish-change first-btn">{name}</button></option>
    );
  }
  return (
    <option value="1"><button type="button" className="dish-change">{name}</button></option>
  );
};
