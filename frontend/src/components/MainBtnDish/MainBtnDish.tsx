import React from 'react';
import './MainBtnDishStyles.css';

interface IMainBtnDish {
  name: string;
}

export const MainBtnDish = ({
  name,
}: IMainBtnDish) => (
  <option value={name}>{name}</option>
);
