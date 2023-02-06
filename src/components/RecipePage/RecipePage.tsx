import React from 'react';
import { RecipeAnswer } from '../RecipeAnswer';
import './RecipePageStyles.css';

export const RecipePage = () => {
  const goods = ['POTATOES', 'MILK', 'CHICKEN', 'LEMON', 'bekon', 'odekolon'];
  return (
    <section className="RecipePage">
      <div className="RecipePage-container">
        <div className="RecipePage-board">
          <div className="dish-picture" />
          <div className="dish-composition">
            {goods.map((el, i) => <RecipeAnswer key={el.toString()} product={el} number={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
