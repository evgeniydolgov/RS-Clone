/* eslint-disable global-require */
import React from 'react';
import { useSound } from '../Layout/Layout';
import './ShopCardStyle.css';

interface ICard {
  nameSloth: string;
  index: number;
  setSell: (el: boolean) => void;
}

export const ShopCard = ({ nameSloth, index, setSell }: ICard) => {
  const { sound } = useSound();
  const costs = (index + 1) * 10;
  const priceMessage = `Price: ${costs} scores`;

  const noMoneyMusic = () => {
    const path = require('../../assets/mp3/necromancernogold1.mp3');
    return new Audio(path);
  };

  const purchaseApproved = () => {
    const path = require('../../assets/mp3/cash-sound.mp3');
    return new Audio(path);
  };

  const score = Number(JSON.parse(localStorage.getItem('score') as string));

  const buyAvatar: React.MouseEventHandler<HTMLElement> = (el) => {
    if (Number(el.currentTarget.dataset.price) < score) {
      if (sound) {
        purchaseApproved().play();
      }
      localStorage.setItem('avatar', `${index + 1}`);
      localStorage.setItem('score', `${score - Number(el.currentTarget.dataset.price)}`);
      setSell(true);
      window.dispatchEvent(new Event('storage'));
      el.currentTarget.className = 'card__container purchase';
      el.currentTarget.children[0].className = 'black-line goodmessage';
    } else {
      el.currentTarget.className = 'card__container shaker';
      if (sound) {
        noMoneyMusic().play();
      }
      el.currentTarget.children[0].className = 'black-line wrongmessage';
    }
  };

  const defautClass: React.MouseEventHandler<HTMLElement> = (el) => {
    el.currentTarget.className = 'card__container';
    el.currentTarget.children[0].className = 'black-line';
  };

  return (
    <div role="presentation" data-price={costs} className="card__container" onClick={buyAvatar} onMouseLeave={defautClass}>
      <div className="black-line">
        <p>{priceMessage}</p>
      </div>
      <div className={nameSloth} />
    </div>
  );
};
