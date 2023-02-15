/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import './WinnerPageStyle.css';

interface IScore {
  score: number
}

export const WinnerPage = ({ score }: IScore) => {
  const storageScore = localStorage.getItem('score');
  if (storageScore) {
    localStorage.setItem('score', (score + +storageScore).toString());
  } else {
    localStorage.setItem('score', (score).toString());
  }
  window.dispatchEvent(new Event('storage'));
  const winMusic = () => {
    const path = require('../../assets/mp3/mexicomus.mp3');
    return new Audio(path);
  };

  const sendData = () => {
    console.log('данные ушли');
  };

  winMusic().play();
  return (
    <div className="winpage">
      <div className="winpage_container">
        <h3>Congratulations!</h3>
        <div className="sloth_img" />
        <p>
          You completed the test and you get
          {' '}
          {score}
          {' '}
          score!
        </p>
        <Link to="/" onClick={sendData}>
          It`s cool!
        </Link>
      </div>
    </div>
  );
};
