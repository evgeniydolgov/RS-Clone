import React from 'react';
import './RecipeVideoStyles.css';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { getActiveRecipe } from '../../store/selectors/commonSelectors';

export const RecipeVideo = () => {
  const activeRecipe = useSelector(getActiveRecipe);

  return (
    <div className="recipe-video">
      <h3>
        Video recipe:
        <span>
          {activeRecipe?.strMeal}
        </span>
      </h3>
      <ReactPlayer
        url={activeRecipe?.strYoutube}
        width="600px"
        height="400px"
        controls
      />
    </div>
  );
};
