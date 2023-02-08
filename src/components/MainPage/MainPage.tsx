import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';
import { loadAllCuisine } from '../../store/actions/commonActions';
import { getAllCuisine } from '../../store/selectors/commonSelectors';
import { MainBtnDish } from '../MainBtnDish';
import { MainImageDish } from '../MainImageDish';
import './MainPageStyles.css';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const allCuisine = useSelector(getAllCuisine);

  useEffect(() => {
    // @ts-ignore
    dispatch(loadAllCuisine(''));
  }, []);

  // const randomSelection = useSelector(getRandomSelection);

  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(loadRandomSelection(''));
  // }, []);

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
        <button type="button" className="start-test_btn">TEST</button>
      </div>

      <div className="mainpage__food-table">
        <div className="selection-category dish-category">
          {allCuisine.map(({ strArea }, i) => (
            <MainBtnDish
              key={strArea}
              name={strArea}
              number={i}
            />
          ))}
        </div>
        <div className="dish-cart">
          {allCuisine.map(({ strArea }, i) => (
            <MainImageDish
              key={strArea}
              name={strArea}
              number={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
