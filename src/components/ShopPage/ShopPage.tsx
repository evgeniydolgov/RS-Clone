/* eslint-disable global-require */
import React from 'react';
import { ShopCard } from '../ShopCard';
import './ShopPageStyle.css';

export const ShopPage = () => {
  const imagesArr = ['Burned', 'Coolman', 'Rs-studen', 'Superman', 'Secretive', 'Samurai'];
  return (
    <section className="shoppage">
      <div className="shoppage__container">
        <div className="shop__info">
          You can spend your score points on a cool avatar!
        </div>
        <div className="image__container">
          {imagesArr.map((el, i) => <ShopCard key={el} nameSloth={el} index={i} />)}
        </div>
      </div>
    </section>
  );
};
