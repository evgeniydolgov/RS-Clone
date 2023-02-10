/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';
import { loadRandomSelection } from '../../store/actions/commonActions';
import { getRandomSelection } from '../../store/selectors/commonSelectors';
import { QuizAnswer } from '../QuizAnswer';
import './QuizPageStyles.css';

export const QuizPage = () => {
  const goods = ['POTATOES', 'MILK', 'CHICKEN', 'LEMON'];
  const [iSLoader, setLoder] = useState(false);

  const dispatch = useAppDispatch();

  const randomSelection = useSelector(getRandomSelection);
  const random = Math.floor(Math.random() * (10 - 0) + 0);

  useEffect(() => {
    const fetchData = async () => {
      // @ts-ignore
      await dispatch(loadRandomSelection());
      setLoder(!iSLoader);
    };
    fetchData();
  }, []);

  console.log(randomSelection);
  if (!iSLoader) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <section className="QuizPage">
      <div className="QuizPage-container">
        <div className="QuizPage-board">
          <div className="dish-picture"><img src={randomSelection[random].strMealThumb} alt="dish-img" /></div>
          <div className="dish-composition">
            {goods.map((el, i) => <QuizAnswer key={el.toString()} product={el} number={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
