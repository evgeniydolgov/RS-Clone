import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerInternalStyles.css';

export interface IBurger {
  value: string;
  href: string;
  icon?: string;
}
interface IBurgerInternal {
  items: IBurger[];
  active: boolean;
  setMenuActive: (value: boolean) => void;
}
export const BurgerInternal = ({
  items, active, setMenuActive,
}:IBurgerInternal) => (
  <button type="button" className={active ? 'menu active' : 'menu'} onClick={() => setMenuActive(true)}>
    <button type="button" className="menu__content">
      <Link className="header-link" to="/"><div className="header-logo" /></Link>
      <ul className="burger__list">
        {items.map((item) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li onClick={() => setMenuActive(true)}>
            <button type="button">
              <Link className="header-link" to={item.href}>{item.value}</Link>
              <span className="material__icons">{item.icon}</span>
            </button>
          </li>
        ))}
      </ul>
    </button>
  </button>
);
