/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './QuizAnswerStyles.css';

export const QuizAnswer = (props: any) => {
  if (props.number % 2 === 0) {
    return (
      <div className="first-product product">{props.product}</div>
    );
  }
  return (
    <div className="second-product product">{props.product}</div>
  );
};
