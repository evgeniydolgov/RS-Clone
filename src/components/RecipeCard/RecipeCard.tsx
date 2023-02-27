import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveRecipe } from '../../store/selectors/commonSelectors';
import { RecipeDescription } from '../RecipeDescription';
import './RecipeCardStyles.css';

export const RecipeCard = () => {
  const activeRecipe = useSelector(getActiveRecipe);

  return (
    <div className="recipe-card">
      <div className="recipe-card__inner">
        <h1>{activeRecipe?.strMeal}</h1>
        <h3>
          Cuisine -&nbsp;
          <span>{activeRecipe?.strArea}</span>
        </h3>
        <RecipeDescription />
      </div>
    </div>
  );
};
