/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-new-object */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';
import { loadRandomSelection } from '../../store/actions/commonActions';
import { getRandomSelection } from '../../store/selectors/commonSelectors';
import { QuizAnswer } from '../QuizAnswer';
import './QuizPageStyles.css';

interface IGameStage {
  RigthAnswer: string,
  dishImg: string,
  UniqueAnswerArr: string[]
}

export const QuizPage = () => {
  const [iSLoader, setLoder] = useState(false);
  const [count, setCount] = useState(0);
  const [nextStage, setNextStage] = useState(false);
  const normalColorBtn = '#0E5984';
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

  useEffect(() => {
    setNextStage(false);
  }, [nextStage]);

  if (!iSLoader) {
    return (
      <div>Loading...</div>
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
      for (let i = 0; arr.length < 4;) {
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
    <section className="QuizPage">
      <div className="QuizPage-container">
        <div className="QuizPage-board">
          <div className="dish-picture"><img src={gameArr[count].dishImg} alt="dish-img" /></div>
          <div className="dish-composition">
            {gameArr[count].UniqueAnswerArr.map((el: string) => (
              <QuizAnswer
                key={el}
                dishesName={el}
                rigthAnswer={gameArr[count].RigthAnswer}
                normalColorBtn={normalColorBtn}
                nextStage={nextStage}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            setCount(count + 1);
            setNextStage(true);
          }}
          type="button"
        >
          click
        </button>
      </div>
    </section>
  );
};
