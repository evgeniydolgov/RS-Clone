import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveRecipe } from '../../store/selectors/commonSelectors';
import './RecipeInstructionStyles.css';

export const RecipeInstruction = () => {
  const activeRecipe = useSelector(getActiveRecipe);

  return (
    <div className="recipe-instruction">
      <h3>Instruction</h3>
      <p>
        {activeRecipe?.strInstructions}
      </p>

    </div>
  );
};
