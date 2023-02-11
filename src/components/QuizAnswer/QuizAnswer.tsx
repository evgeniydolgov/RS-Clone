import React, { useState } from 'react';
import './QuizAnswerStyles.css';

interface IQuizAnswer {
  dishesName: string;
  rigthAnswer: string;
}

export const QuizAnswer = ({ dishesName, rigthAnswer }: IQuizAnswer) => {
  const [colorBtn, setColorBtn] = useState('#0E5984');

  const checkigClickBtn: React.MouseEventHandler<HTMLButtonElement> = (element) => {
    if (rigthAnswer === element.currentTarget.name) {
      setColorBtn('#187511cb');
    } else {
      setColorBtn('#263640');
    }
  };
  return (
    <button
      type="button"
      className="product"
      name={dishesName}
      style={{ backgroundColor: colorBtn }}
      onClick={checkigClickBtn}
    >
      {dishesName}
    </button>
  );
};
