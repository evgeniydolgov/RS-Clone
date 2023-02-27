import React, { useState } from 'react';
import { BurgerInternal } from '../BurgerInternal';
import { IBurger } from '../BurgerInternal/BurgerInternal';
import './BurgerMenuStyles.css';

export const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(true);

  const items: IBurger[] = [
    { value: 'Main', href: '/' },
    { value: 'Join Us', href: '/authorize' },
    { value: 'Players', href: '/playerList', icon: '' },
  ];

  const setMenu = (value: boolean) => {
    setMenuActive(value);
  };

  return (
    <div>
      <nav className="burger">
        <button type="button" onClick={() => setMenuActive(!menuActive)}>
          <div className="burger__btn">
            <span />
          </div>
        </button>
      </nav>
      <BurgerInternal active={menuActive} setMenuActive={setMenu} items={items} />
    </div>
  );
};
