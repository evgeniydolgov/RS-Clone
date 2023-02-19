import React, { useEffect, useState } from 'react';
import { MemoGame } from '../MemoGame';
import { cardImages } from '../../cardImages';
import { WinnerPage } from '../WinnerPage';
import './MemoPageStyles.css';

interface ICardImages {
  src: string;
  id: number;
  matched: boolean
}
interface ICard {
  src: string;
  id: number;
}
export const MemoPage = () => {
  const [cards, setCards] = useState<ICardImages[]>([]);
  const [count, setCount] = useState(0);
  const [selectOne, setSelectOne] = useState<ICard | null>(null);
  const [selectTwo, setSelectTwo] = useState<ICard | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setSelectOne(null);
    setSelectTwo(null);
    setCards(shuffledCards);
    setScore(0);
  };

  const switching = (card: any) => (selectOne ? setSelectTwo(card) : setSelectOne(card));

  const resetTurn = () => {
    setSelectOne(null);
    setSelectTwo(null);
    setDisabled(false);
  };

  useEffect(() => {
    if (selectOne && selectTwo) {
      setDisabled(true);
      if (selectOne.src === selectTwo.src) {
        setCards((prevCards) => prevCards.map((card) => {
          if (card.src === selectOne.src) {
            return { ...card, matched: true };
          }
          return card;
        }));
        setScore((prevScore) => prevScore + 3);
        setCount(count + 1);
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
        // debugger;
        if (score > 0) {
          setScore((prevScore) => prevScore - 1);
        }
      }
    }
  }, [selectOne, selectTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  if (count === 8) {
    return (
      <WinnerPage score={score} />
    );
  }

  return (
    <div className="memo">
      <div className="memo__inner">
        <div className="memo__control">
          <h1 className="memo__title">Memo</h1>
          <button type="button" onClick={shuffleCards} className="memo__btn">New Game</button>
        </div>
        <div className="memo__cards">
          {cards?.map((card) => (
            <MemoGame
              key={card.id}
              card={card}
              switching={switching}
              rotated={card === selectOne || card === selectTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p className="memo__score">
          Score: &nbsp;
          <span>
            {score}
          </span>
        </p>
      </div>
    </div>
  );
};
