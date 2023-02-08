import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';

export const Header = () => (
  <header>
    <div className="header__inner">
      <div className="header-info">
        <div className="header-logo" />
        <nav>
          <ul className="header-list">
            <li><Link className="header-link" to="/">Home</Link></li>
            <li><Link className="header-link" to="/quiz">Cooking Quiz</Link></li>
            <li><Link className="header-link" to="recipe">Recipes</Link></li>
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
