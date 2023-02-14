import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import {
  loadAllCuisine, loadRandomSelection, loadRecipeById, loadRecipesByCuisineName,
} from '../../store/actions/commonActions';
import { getAllCuisine, getRandomSelection } from '../../store/selectors/commonSelectors';
import { saveCountryName } from '../../store/slises/commonSlice';
import { MainBtnDish } from '../MainBtnDish';
import { MainImageDish } from '../MainImageDish';
import './MainPageStyles.css';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const allCuisine = useSelector(getAllCuisine);

  useEffect(() => {
    dispatch(loadAllCuisine());
  }, []);

  const randomSelection = useSelector(getRandomSelection);

  useEffect(() => {
    dispatch(loadRandomSelection());
  }, []);

  const onDishClick = (id: string) => {
    dispatch(loadRecipeById(id));
  };

  const navigate = useNavigate();
  const onNameOfCuisineClick = ({ target }: any) => {
    navigate('/recipeCuisine');
    dispatch(loadRecipesByCuisineName(target.value));
    dispatch(saveCountryName(target.value));
  };

  return (
    <div className="mainpage__container">
      <div className="mainpage__vegetables-board">
        <h2>
          We teach you how
          <br />
          to cook delicious
          <br />
          for happiness at home!
        </h2>
      </div>

      <div className="mainpage__test">
        <h3>
          Try games from
          <span> ShchiBorshci</span>
        </h3>
        <Link to="/quiz"><button type="button" className="start-test_btn">Games</button></Link>
      </div>

      <div className="mainpage__food-table">
        <div className="title-random">
          <h4>We have picked up some random recipes for you</h4>
        </div>
        <div className="dish-cart">
          {randomSelection.map(({ strMeal, idMeal, strMealThumb }, index) => {
            if (index <= 8) {
              return (
                <Link to="/recipe" key={idMeal}>
                  <MainImageDish
                    url={strMealThumb}
                    name={strMeal}
                    onDishClick={onDishClick}
                    id={idMeal}
                  />
                </Link>
              );
            } return null;
          })}
        </div>
        <div className="test">
          <select
            name="list"
            id="select"
            className="selection-category"
            onChange={onNameOfCuisineClick}
          >
            <optgroup>
              <option value="">Choose your favorite cuisine</option>

              {allCuisine.map(({ strArea }) => (
                <MainBtnDish
                  name={strArea}
                  key={strArea}
                />
              ))}
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
};
