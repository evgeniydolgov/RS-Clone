/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './QuizAnswerStyles.css';

interface IQuizAnswer {
  dishesName: string;
  rigthAnswer: string;
  normalColorBtn: string;
  nextStage: boolean;
}

export const QuizAnswer = ({
  dishesName, rigthAnswer, normalColorBtn, nextStage,
}: IQuizAnswer) => {
  const [colorBtn, setColorBtn] = useState('#0E5984');

  const checkigClickBtn: React.MouseEventHandler<HTMLButtonElement> = (element) => {
    if (rigthAnswer === element.currentTarget.name) {
      setColorBtn('#187511cb');
    } else {
      setColorBtn('#263640');
    }
  };

  useEffect(() => {
    if (colorBtn !== '#0E5984') {
      setColorBtn('#0E5984');
    }
  }, [nextStage]);

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
