import React from 'react';
import './HeaderStyles.css';

export const Header = () => (
  <header>
    <div className="header__inner">
      <div className="header-info">
        <div className="header-logo" />
        <nav>
          <ul className="header-list">
            <li><a className="header-link" href="/#">Cooking Quiz</a></li>
            <li><a className="header-link" href="/#">Recipes</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-authorization">
        <button type="button" className="btn authorization__btn">Login</button>
        <button type="button" className="btn authorization__btn">Sign Up</button>
      </div>
    </div>
  </header>
);
