/* eslint-disable no-new */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useRef, useEffect } from 'react';
import { QuizAnswer } from '../QuizAnswer';
import { WinnerPage } from '../WinnerPage';
import './QuizRanderStyle.css';

interface IGameStage {
  RigthAnswer: string,
  dishImg: string,
  UniqueAnswerArr: string[]
}

interface IGameArr {
  gameArr: IGameStage[]
}

export const QuizRander = (props: IGameArr) => {
  const [count, setCount] = useState(0);
  const [countScore, setCountScore] = useState(0);
  const [nextStage, setNextStage] = useState(false);
  const [clickBtn, setClickBtn] = useState(true);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setNextStage(false);
    setClickBtn(true);
  }, [nextStage]);

  const nextQuestion = () => {
    if (count < 5) {
      setCount(count + 1);
      setNextStage(true);
      (btnRef.current as HTMLButtonElement).style.pointerEvents = 'none';
      (btnRef.current as HTMLButtonElement).style.backgroundColor = '#263640';
    }
  };

  const unlockNextBtn = () => {
    (btnRef.current as HTMLButtonElement).style.pointerEvents = 'all';
    (btnRef.current as HTMLButtonElement).style.backgroundColor = '#0E5984';
  };

  const score = () => {
    if (countScore >= 0) {
      return countScore;
    }
    return 0;
  };

  if (count === 5) {
    return (
      <WinnerPage score={countScore} />
    );
  }

  return (
    <section className="QuizPage">
      <div className="QuizPage-container">
        <h1 className="quiz__title">Quiz</h1>

        <div className="QuizPage-board">
          <div className="dish-picture"><img src={props.gameArr[count].dishImg} alt="dish-img" /></div>
          <div className="dish-composition">
            {props.gameArr[count].UniqueAnswerArr.map((el: string) => (
              <QuizAnswer
                key={el}
                dishesName={el}
                rigthAnswer={props.gameArr[count].RigthAnswer}
                nextStage={nextStage}
                unlockNextBtn={unlockNextBtn}
                countScore={countScore}
                setCountScore={setCountScore}
                clickBtn={clickBtn}
                setClickBtn={setClickBtn}
              />
            ))}
            <div className="score_container">
              <p>
                Score:
                {' '}
                {score()}
              </p>
              <button className="next_btn" ref={btnRef} onClick={nextQuestion} type="button">next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
