import React, { useState } from 'react';
import './MemoPageStyles.css';

const cardImages = [
  { src: '/png/Aubergine.png' },
  { src: '/png/Avocado.png' },
  { src: '/png/Lettuce.png' },
  { src: '/png/Lime.png' },
  { src: '/png/Pumpkin.png' },
  { src: '/png/Tomatoes.png' },
  { src: '/png/Walnuts.png' },
  { src: '/png/Tomatoes.png' },
];
export const MemoPage = () => {
  const [cards, setCards] = useState({});
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  console.log('!!!!!', cards, turns);
  return (
    <div className="memo">
      <h1 className="memo__title">MemoPage</h1>
      <button type="button" onClick={shuffleCards} className="memo__btn">New Game</button>
    </div>
  );
};
