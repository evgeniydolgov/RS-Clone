import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActiveCountry, getRecipeByNameCuisine } from '../../store/selectors/commonSelectors';
import { SortListByArea } from '../SortListByArea';
import './SortCuisinesRecipesByAreaStyles.css';

export const SortCuisinesRecipesByArea = () => {
  const recipesByCuisineName = useSelector(getRecipeByNameCuisine);
  const activeCountry = useSelector(getActiveCountry);

  return (
    <div className="sort-by-area">
      <div className="sort-by-area__inner">
        <h3>
          Cuisine -&nbsp;
          <span>
            {activeCountry}
          </span>
        </h3>
        <div className="sort-by-area__list">
          {recipesByCuisineName.map(({
            strMeal, idMeal, strMealThumb,
          }) => (
            <Link to="/recipe" key={idMeal}>
              <SortListByArea id={idMeal} strMeal={strMeal} url={strMealThumb} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
