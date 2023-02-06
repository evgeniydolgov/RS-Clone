import React from 'react';
import { RecipeIngredients } from '../RecipeIngredients';
import { RecipeInstruction } from '../RecipeInstruction';
import { RecipeVideo } from '../RecipeVideo';
import './RecipeDescriptionStyles.css';

export const RecipeDescription = () => (
  <div className="recipe">
    <div className="recipe__description">
      <h3>
        Cuisine:
        <span>Area</span>
      </h3>
      <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" className="recipe__img" alt="img-dishes" />
      <RecipeIngredients />
    </div>
    <RecipeInstruction />
    <RecipeVideo />
  </div>
);
