import React, { useEffect, useState } from 'react';
import { MemoGame } from '../MemoGame';
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
const cardImages = [
  { src: '/png/Aubergine.png  ', matched: false },
  { src: '/png/Avocado.png', matched: false },
  { src: '/png/Lettuce.png', matched: false },
  { src: '/png/Lime.png', matched: false },
  { src: '/png/Pumpkin.png', matched: false },
  { src: '/png/Tomatoes.png', matched: false },
  { src: '/png/Walnuts.png', matched: false },
  { src: '/png/YellowPepper.png', matched: false },
];
export const MemoPage = () => {
  const [cards, setCards] = useState<ICardImages[]>([]);
  const [turns, setTurns] = useState(0);
  const [selectOne, setSelectOne] = useState<ICard | null>(null);
  const [selectTwo, setSelectTwo] = useState<ICard | null>(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setSelectOne(null);
    setSelectTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handlerChoice = (card: any) => (selectOne ? setSelectTwo(card) : setSelectOne(card));

  const resetTurn = () => {
    setSelectOne(null);
    setSelectTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
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
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [selectOne, selectTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

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
              card={card}
              key={card.id}
              handlerChoice={handlerChoice}
              flipped={card === selectOne || card === selectTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p className="memo__turns">
          Turns: &nbsp;
          <span>
            {turns}
          </span>
        </p>
      </div>
    </div>
  );
};
