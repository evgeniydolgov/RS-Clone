import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveRecipe } from '../../store/selectors/commonSelectors';
import { RecipeIngredientItem } from '../RecipeIngredientItem';
import './RecipeIngredientsStyles.css';

export const RecipeIngredients = () => {
  const activeRecipe = useSelector(getActiveRecipe);

  if (!activeRecipe) {
    return null;
  }
  const activeRecipeKeys = Object.keys(activeRecipe);

  const ingredients: string[] = [];
  const measure: string[] = [];

  activeRecipeKeys.forEach((item: string) => {
    const value = activeRecipe[item as keyof typeof activeRecipe];

    if (item.startsWith('strIngredient')) {
      if (value) {
        ingredients.push(value);
      }
    }
    if (item.startsWith('strMeasure')) {
      if (value && value !== ' ') {
        measure.push(value);
      }
    }
  });
  return (
    <div className="recipe__ingredients">
      <h3>Ingredients: &nbsp;</h3>
      <ul className="ingredients__list">
        {ingredients.map((item, index) => (
          <RecipeIngredientItem strIngredient={item} strMeasure={measure[index]} key={item} />
        ))}
      </ul>
    </div>
  );
};
