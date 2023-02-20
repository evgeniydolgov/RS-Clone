/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './QuizAnswerStyles.css';
import { useSound } from '../Layout/Layout';

export const missClick = () => {
  const path = require('../../assets/mp3/miss-click.mp3');
  return new Audio(path);
};

export const winClick = () => {
  const path = require('../../assets/mp3/winClick.mp3');
  return new Audio(path);
};

interface IQuizAnswer {
  dishesName: string;
  rigthAnswer: string;
  nextStage: boolean;
  unlockNextBtn: () => void;
  countScore: number;
  setCountScore:(el: number) => void;
  clickBtn: boolean;
  setClickBtn:(el: boolean) => void;
}

export const QuizAnswer = ({
  dishesName, rigthAnswer, nextStage, unlockNextBtn, countScore, setCountScore, clickBtn, setClickBtn,
}: IQuizAnswer) => {
  const [colorBtn, setColorBtn] = useState('#0E5984');
  const { sound } = useSound();

  const checkigClickBtn: React.MouseEventHandler<HTMLButtonElement> = (element) => {
    if (rigthAnswer === element.currentTarget.name && clickBtn) {
      setColorBtn('#187511cb');
      unlockNextBtn();
      setClickBtn(false);
      setCountScore(countScore + 3);
      sound ? winClick().play() : winClick;
    } else if (clickBtn && colorBtn === '#0E5984') {
      setColorBtn('#263640');
      setCountScore(countScore - 1);
      sound ? missClick().play() : missClick;
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
