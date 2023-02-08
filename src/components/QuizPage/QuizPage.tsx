import React from 'react';
import { QuizAnswer } from '../QuizAnswer';

import './QuizPageStyles.css';

export const QuizPage = () => {
  const goods = ['POTATOES', 'MILK', 'CHICKEN', 'LEMON'];
  return (
    <section className="QuizPage">
      <div className="QuizPage-container">
        <div className="QuizPage-board">
          <div className="dish-picture" />
          <div className="dish-composition">
            {goods.map((el, i) => <QuizAnswer key={el.toString()} product={el} number={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
