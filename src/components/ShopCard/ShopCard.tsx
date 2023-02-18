/* eslint-disable global-require */
import React from 'react';
import './ShopCardStyle.css';

interface ICard {
  nameSloth: string;
  index: number;
}

export const ShopCard = ({ nameSloth, index }: ICard) => {
  // const Avatar = 'Avatar: ';
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

  const spendScore = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: JSON.parse(localStorage.getItem('user') || ''),
        score: JSON.parse(localStorage.getItem('score') || ''),
        avatar: JSON.parse(localStorage.getItem('avatar') || ''),
      }),
    };
    const response = await fetch(
      'http://localhost:3001/spendscore',
      requestOptions,
    );
    const data = await response.json();
    console.log(response);
    console.log(data);
  };

  const buyAvatar: React.MouseEventHandler<HTMLElement> = (el) => {
    if (Number(el.currentTarget.dataset.price) < score) {
      console.log('sell!');
      purchaseApproved().play();
      localStorage.setItem('avatar', `${index + 1}`);
      localStorage.setItem('score', `${score - Number(el.currentTarget.dataset.price)}`);
      spendScore();
      window.dispatchEvent(new Event('storage'));
      el.currentTarget.className = 'card__container purchase';
      el.currentTarget.children[0].className = 'black-line goodmessage';
    } else {
      console.log('not enough money');
      el.currentTarget.className = 'card__container shaker';
      noMoneyMusic().play();
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
        {/* <p>{Avatar + nameSloth}</p> */}
        <p>{priceMessage}</p>
      </div>
      <div className={nameSloth} />
    </div>
  );
};
