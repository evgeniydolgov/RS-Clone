import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';

export const Header = () => (
  <header>
    <div className="header-info">
      <div className="header-logo" />
      <nav>
        <ul className="header-list">
          <li><Link className="header-link" to="/">Home</Link></li>
          <li><a className="header-link" href="/#">Cooking Quiz</a></li>
          <li><Link className="header-link" to="recipe">Recipes</Link></li>
        </ul>
      </nav>
    </div>
    <div className="header-authorization">
      <button type="button" className="btn authorization__btn">Login</button>
      <button type="button" className="btn authorization__btn">Sign Up</button>
    </div>
  </header>
);
