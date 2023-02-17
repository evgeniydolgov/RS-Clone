/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './MemoGameStyles.css';

interface IMemoGame {
  card: {
    src: string;
    id: number;
  }
  handlerChoice: (card: {
    src: string;
    id: number;
  }) => void;
  flipped: boolean;
  disabled: boolean;
}

export const MemoGame = ({
  card, handlerChoice, flipped, disabled,
}: IMemoGame) => {
  const handleClick = () => {
    if (!disabled) {
      handlerChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} className="card_front" alt="" />
        <img
          src="/png/back_memo.png"
          className="card_back"
          alt=""
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
