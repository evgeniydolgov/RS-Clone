/* eslint-disable react/destructuring-assignment */
import React, { useState, useRef, useEffect } from 'react';
import { QuizAnswer } from '../QuizAnswer';
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
  const [nextStage, setNextStage] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setNextStage(false);
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

  if (count === 5) {
    return (
      <div>WE HAVE A WINNER</div>
    );
  }
  return (
    <section className="QuizPage">
      <div className="QuizPage-container">
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
              />
            ))}
            <button className="next_btn" ref={btnRef} onClick={nextQuestion} type="button">next</button>
          </div>
        </div>
      </div>
    </section>
  );
};
