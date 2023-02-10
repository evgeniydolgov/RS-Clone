/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './QuizAnswerStyles.css';

interface IQuizAnswer {
  dishesName: string;
  index: number;
  rigthAnswer: string;
}

export const QuizAnswer = (props: IQuizAnswer) => {
  const checkigClickBtn = (element: any) => {
    props.rigthAnswer === element.target.name ? console.log('урааааа') : console.log('мимо!');
  };
  return (
    <button
      name={props.dishesName}
      type="button"
      onClick={checkigClickBtn}
      className={props.index % 2 === 0 ? 'first-product product' : 'second-product product'}
    >
      {props.dishesName}

    </button>
  );
};
