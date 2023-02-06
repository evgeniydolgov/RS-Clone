/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './RecipeAnswerStyles.css';

export const RecipeAnswer = (props: any) => {
  if (props.number % 2 === 0) {
    return (
      <div className="first-product product">{props.product}</div>
    );
  }
  return (
    <div className="second-product product">{props.product}</div>
  );
};
