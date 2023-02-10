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
  const [iSLoader, setLoder] = useState(false);

  const dispatch = useAppDispatch();

  const randomSelection = useSelector(getRandomSelection);
  const rigthAnswer = Math.floor(Math.random() * (10 - 0) + 0);

  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function creatUnicArray() {
    let arr = [];
    arr.push(randomSelection[rigthAnswer].strMeal);
    for (let i = 0; i < 4; i += 1) {
      arr.push(randomSelection[i].strMeal);
    }
    arr = Array.from(new Set(arr)).slice(0, 4);
    return arr;
  }

  const UniqueAnswerArr = shuffle(creatUnicArray());

  useEffect(() => {
    const fetchData = async () => {
      // @ts-ignore
      await dispatch(loadRandomSelection());
      setLoder(!iSLoader);
    };
    fetchData();
  }, []);

  if (!iSLoader) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <section className="QuizPage">
      <div className="QuizPage-container">
        <div className="QuizPage-board">
          <div className="dish-picture"><img src={randomSelection[rigthAnswer].strMealThumb} alt="dish-img" /></div>
          <div className="dish-composition">
            {UniqueAnswerArr.map((el, index) => <QuizAnswer key={el} dishesName={el} index={index} rigthAnswer={randomSelection[rigthAnswer]} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
