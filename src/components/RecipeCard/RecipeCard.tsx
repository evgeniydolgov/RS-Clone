import React from 'react';
import { RecipeDescription } from '../RecipeDescription';
import './RecipeCardStyles.css';

export const RecipeCard = () => (
  <section>
    <div className="recipe-card">
      <div className="recipe-card__inner">
        <h1>Name Dishes</h1>
        <RecipeDescription />

      </div>
    </div>
  </section>
);
