import React from 'react';
// import { useAppDispatch } from '../../hooks';
// import { loadAllCuisine } from '../../store/actions/commonActions';
import { MainBtnDish } from '../MainBtnDish';
import { MainImageDish } from '../MainImageDish';
import './MainPageStyles.css';

export const MainPage = () => {
  const cookingDishes = ['American', 'British', 'American', 'British', 'American', 'British', 'American', 'British', 'American'];
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(loadAllCuisine());
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
          {cookingDishes.map((el, i) => (
            <MainBtnDish
              key={el + i.toString()}
              name={el}
              number={i}
            />
          ))}
        </div>
        <div className="dish-cart">
          {cookingDishes.map((el, i) => (
            <MainImageDish
              key={el + i.toString()}
              name={el}
              number={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
