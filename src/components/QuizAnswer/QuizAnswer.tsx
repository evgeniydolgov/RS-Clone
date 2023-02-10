/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { IRandomSelection } from '../../store/slises/commonSlice';
import './QuizAnswerStyles.css';

interface IQuizAnswer {
  dishesName: string;
  index: number;
  rigthAnswer: IRandomSelection;
}

export const QuizAnswer = (props: IQuizAnswer) => (
  <button type="button" className={props.index % 2 === 0 ? 'first-product product' : 'second-product product'}>{props.dishesName}</button>
);
