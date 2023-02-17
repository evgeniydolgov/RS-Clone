/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';

export const Header = () => {
  const [user, setUser] = useState(localStorage.getItem('user')?.slice(1, -1));
  const [score, setScore] = useState(localStorage.getItem('score'));

  useEffect(() => {
    const storageEventHandler = () => {
      // console.log('sdjfhskdf');
      if (localStorage.getItem('user') != null) {
        // console.log('dfgdg');
        setUser(JSON.parse(localStorage.getItem('user') || ''));
        return;
      }
      setUser('');
    };
    window.addEventListener('storage', storageEventHandler);

    return () => { window.removeEventListener('storage', storageEventHandler); };
  }, [user]);

  useEffect(() => {
    const scoreHandler = () => {
      // console.log('sdjfhskdf');
      if (localStorage.getItem('score') != null) {
        // console.log('dfgdg');
        setScore(JSON.parse(localStorage.getItem('score') || ''));
        return;
      }
      setScore('0');
    };
    window.addEventListener('storage', scoreHandler);

    return () => { window.removeEventListener('storage', scoreHandler); };
  }, [score]);
  console.log(user);
  return (
    <header>
      <div className="header__inner">
        <div className="header-info">
          <Link className="header-link" to="/"><div className="header-logo" /></Link>
          <nav>
            <ul className="header-list">
              <li><Link className="header-link" to="/playerList">Players list</Link></li>
              {/* <li><Link className="header-link" to="/recipe">Recipes</Link></li> */}
            </ul>
          </nav>
        </div>
        {user && (
          <div className="header-account">
            <div className="userpic" />
            <div className="userinfo">
              <p>{user}</p>
              <p>{`Score: ${score || ''}`}</p>
            </div>
          </div>
        )}
        <div className="header-authorization">
          <button type="button" className="btn authorization__btn">
            <Link className="btn__link" to="/authorize">Join us</Link>
          </button>
        </div>
      </div>
    </header>
  );
};
