import React from 'react';
import './RecipeIngredientsStyles.css';

export const RecipeIngredients = () => (
  <div className="recipe__ingredients">
    <h3>Ingredients:</h3>
    <div className="ingredients__list">
      <div className="ingredients__item">
        <p className="item__name">penne rigate</p>
        <span>|</span>
        <p className="item__dose">1 pound</p>
      </div>
      <div className="ingredients__item">
        <p className="item__name">olive oil</p>
        <span>|</span>
        <p className="item__dose">1/4 cup</p>
      </div>
      <div className="ingredients__item">
        <p className="item__name">garlic</p>
        <span>|</span>
        <p className="item__dose">3 cloves</p>
      </div>
    </div>
  </div>
);
