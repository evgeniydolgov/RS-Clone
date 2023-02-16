/* eslint-disable global-require */
import React from 'react';
import './ShopCardStyle.css';

interface ICard {
  nameSloth: string;
  index: number;
}

export const ShopCard = ({ nameSloth, index }: ICard) => {
  const Avatar = 'Avatar: ';
  const costs = (index + 1) * 10;
  const priceMessage = `Price: ${costs} scores`;

  const winMusic = () => {
    const path = require('../../assets/mp3/necromancernogold1.mp3');
    return new Audio(path);
  };

  const buyAvatar: React.MouseEventHandler<HTMLElement> = (el) => {
    if (Number(el.currentTarget.dataset.price) < 35) {
      console.log('sell!');
    } else {
      console.log('not enough money');
      el.currentTarget.className = 'card__container shaker';
      winMusic().play();
      console.log();
    }
  };

  const defautClass: React.MouseEventHandler<HTMLElement> = (el) => {
    el.currentTarget.className = 'card__container';
  };

  return (
    <div role="presentation" data-price={costs} className="card__container" onClick={buyAvatar} onMouseLeave={defautClass}>
      <div className="black-line">
        <p>{Avatar + nameSloth}</p>
        <p>{priceMessage}</p>
      </div>
      <div className={nameSloth} />
    </div>
  );
};
