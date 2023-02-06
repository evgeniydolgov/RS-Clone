import React from 'react';
import './RecipeIngredientsStyles.css';

export const RecipeIngredients = () => (
  <div className="recipe__ingredients">
    <h3>Ingredients:</h3>
    <ul className="ingredients__list">
      <li>
        penne rigate
        <span className="item__dose">1 pound</span>
      </li>
      <li>
        garlic
        <span className="item__dose">1/4 cup</span>
      </li>
      <li>
        italian seasoning
        <span className="item__dose">1/2 teaspoon</span>
      </li>
    </ul>
  </div>
);
