/* eslint-disable no-continue */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';
import { loadRandomSelection } from '../../store/actions/commonActions';
import { getRandomSelection } from '../../store/selectors/commonSelectors';
import { LoadingAnimation } from '../LoadingAnimation';
import { QuizRander } from '../QuizRender';
import './QuizPageStyles.css';

interface IGameStage {
  RigthAnswer: string,
  dishImg: string,
  UniqueAnswerArr: string[]
}

export const QuizPage = () => {
  const [iSLoader, setLoder] = useState(false);
  const dispatch = useAppDispatch();

  const randomSelection = useSelector(getRandomSelection);
  const gameArr: IGameStage[] = [];
  const uniqueRandomNumbers: number[] = [];

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
      <div className="loading_page">
        <LoadingAnimation />
      </div>
    );
  }

  while (gameArr.length < 5) {
    const rigthAnswerNumber = Math.floor(Math.random() * (10 - 0) + 0);
    if (uniqueRandomNumbers.includes(rigthAnswerNumber)) {
      continue;
    }
    uniqueRandomNumbers.push(rigthAnswerNumber);

    const shuffle = (array: string[]) => {
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const creatUnicArray = () => {
      let arr = [];
      arr.push(randomSelection[rigthAnswerNumber].strMeal);
      while (arr.length < 4) {
        const randomIndex = Math.floor(Math.random() * (10 - 0) + 0);
        if (!(arr.includes(randomSelection[randomIndex].strMeal))) {
          arr.push(randomSelection[randomIndex].strMeal);
        }
      }
      arr = Array.from(new Set(arr)).slice(0, 4);
      return arr;
    };

    const dishImg = randomSelection[rigthAnswerNumber].strMealThumb;
    const UniqueAnswerArr = shuffle(creatUnicArray());
    const RigthAnswer = randomSelection[rigthAnswerNumber].strMeal;

    const gameStage: IGameStage = {
      RigthAnswer,
      dishImg,
      UniqueAnswerArr,
    };
    gameArr.push(gameStage);
  }

  return (
    <QuizRander gameArr={gameArr} />
  );
};
