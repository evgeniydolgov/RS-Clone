import React from 'react';
import './RecipeVideoStyles.css';
import ReactPlayer from 'react-player';

export const RecipeVideo = () => (
  <div className="recipe-video">
    <h3>
      Video recipe:
      <span> Spicy Arrabiata Penne</span>
    </h3>
    <ReactPlayer
      url="https://www.youtube.com/watch?v=1IszT_guI08"
      width="600px"
      height="400px"
      controls
    />
  </div>
);
