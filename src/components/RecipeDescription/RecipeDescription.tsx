import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveRecipe } from '../../store/selectors/commonSelectors';
import { RecipeIngredients } from '../RecipeIngredients';
// import { RecipeIngredients } from '../RecipeIngredients';
import { RecipeInstruction } from '../RecipeInstruction';
import { RecipeVideo } from '../RecipeVideo';
import './RecipeDescriptionStyles.css';

export const RecipeDescription = () => {
  const activeRecipe = useSelector(getActiveRecipe);

  if (!activeRecipe) {
    return null;
  }

  return (
    <div className="recipe">
      <div className="recipe__description">
        <img src={activeRecipe?.strMealThumb} className="recipe__img" alt="img-dishes" />
        <RecipeIngredients />
      </div>

      <RecipeInstruction />
      <RecipeVideo />
    </div>
  );
};
