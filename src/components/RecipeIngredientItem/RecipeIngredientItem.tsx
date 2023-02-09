import React from 'react';
import './RecipeIngredientItemStyles.css';

interface IRecipeIngredients {
  strMeasure: string;
  strIngredient: string;
}

export const RecipeIngredientItem = ({ strIngredient, strMeasure }: IRecipeIngredients) => (
  <li>
    {strIngredient}
    <span className="item__dose">{strMeasure}</span>
  </li>
);
