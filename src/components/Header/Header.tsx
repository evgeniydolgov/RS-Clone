import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';

export const Header = () => (
  <header>
    <div className="header__inner">
      <div className="header-info">
        <Link className="header-link" to="/"><div className="header-logo" /></Link>
        <nav>
          <ul className="header-list">
            <li><Link className="header-link" to="/quiz">Games</Link></li>
            {/* <li><Link className="header-link" to="/recipe">Recipes</Link></li> */}
          </ul>
        </nav>
      </div>
      <div className="header-authorization">
        <button type="button" className="btn authorization__btn"><Link className="btn__link" to="/authorize">Login</Link></button>
        <button type="button" className="btn authorization__btn"><Link className="btn__link" to="/authorize">Sign Up</Link></button>
      </div>
    </div>
  </header>
);
