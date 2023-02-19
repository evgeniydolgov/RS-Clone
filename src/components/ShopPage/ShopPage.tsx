/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ShopCard } from '../ShopCard';
import './ShopPageStyle.css';

export const ShopPage = () => {
  const imagesArr = ['Burned', 'Coolman', 'Rs-studen', 'Superman', 'Secretive', 'Samurai'];
  const [sell, setSell] = useState(false);

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
  };

  useEffect(() => {
    spendScore();
    setSell(false);
  }, [sell]);

  return (
    <section className="shoppage">
      <div className="shoppage__container">
        <div className="shop__info">
          You can spend your score points on a cool avatar!
        </div>
        <div className="image__container">
          {imagesArr.map((el, i) => <ShopCard key={el} nameSloth={el} index={i} setSell={setSell} />)}
        </div>
      </div>
    </section>
  );
};
