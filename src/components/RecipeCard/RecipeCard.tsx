import React from 'react';
import { RecipeDescription } from '../RecipeDescription';
import './RecipeCardStyles.css';

export const RecipeCard = () => (
  <div className="recipe-card">
    <div className="recipe-card__inner">
      <h1>Name Dishes</h1>
      <h3>
        Cuisine:
        <span> Area</span>
      </h3>
      <RecipeDescription />

    </div>
  </div>
);
