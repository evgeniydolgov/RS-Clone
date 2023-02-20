/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';

interface ISound {
  sound: boolean;
  setSound: (el: boolean) => void
}

export const Header = ({ sound, setSound }: ISound) => {
  const [user, setUser] = useState(localStorage.getItem('user')?.slice(1, -1));
  const [score, setScore] = useState(localStorage.getItem('score'));
  const [avatar, setAvatar] = useState((localStorage.getItem('avatar')));

  const nameAvatar = ['userpic', 'burn-arr', 'cool-arr', 'stud-arr', 'super-arr', 'secret-arr', 'sam-arr'];

  const activSound = () => {
    setSound(true);
  };
  const disabledSound = () => {
    setSound(false);
  };

  useEffect(() => {
    const storageEventHandler = () => {
      if (localStorage.getItem('user') != null) {
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
      if (localStorage.getItem('score') != null) {
        setScore(JSON.parse(localStorage.getItem('score') || ''));
        return;
      }
      setScore('0');
    };
    window.addEventListener('storage', scoreHandler);

    return () => { window.removeEventListener('storage', scoreHandler); };
  }, [score]);

  useEffect(() => {
    const avatarHandler = () => {
      if (localStorage.getItem('avatar') != null) {
        setAvatar(JSON.parse(localStorage.getItem('avatar') || ''));
        return;
      }
      setAvatar('0');
    };
    window.addEventListener('storage', avatarHandler);

    return () => { window.removeEventListener('storage', avatarHandler); };
  }, [avatar]);
  return (
    <header>
      <div className="header__inner">
        <div className="header-info">
          <Link className="header-link" to="/"><div className="header-logo" /></Link>
          <nav>
            <ul className="header-list">
              <li><Link className="header-link" to="/playerList">Players list</Link></li>
            </ul>
          </nav>
        </div>
        {user && (
          <div className="header-account">
            <div className={nameAvatar[JSON.parse(avatar || '')]} />
            <div className="userinfo">
              <p>{user}</p>
              <p>{`Score: ${JSON.parse(score || '')}`}</p>
            </div>
          </div>
        )}
        <div className="header-authorization">
          <button type="button" className={sound ? 'sound_on' : 'sound_off'} onClick={sound ? disabledSound : activSound}>{}</button>
          <Link className="btn__link" to="/authorize">
            <button type="button" className="btn authorization__btn">Join us</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
