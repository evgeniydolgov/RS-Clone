import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loadAllCuisine, loadRandomSelection, loadRecipeById } from '../../store/actions/commonActions';
import { getAllCuisine, getRandomSelection } from '../../store/selectors/commonSelectors';
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
    if (id) { dispatch(loadRecipeById(id)); }
  };

  return (
    <div className="mainpage__container">
      <div className="mainpage__vegetables-board">
        <div className="mainpage__message" />
      </div>

      <div className="mainpage__test">
        <h3>
          Take the test from
          <span> ShchiBorshci</span>
        </h3>
        <Link to="/quiz"><button type="button" className="start-test_btn">TEST</button></Link>
      </div>

      <div className="mainpage__food-table">
        {/* <div className="selection-category dish-category"> */}
        <select name="list" className="selection-category">

          {allCuisine.map(({ strArea }, i) => (
            <MainBtnDish
              key={strArea}
              name={strArea}
              number={i}
            />
          ))}
        </select>
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
      </div>
    </div>
  );
};
