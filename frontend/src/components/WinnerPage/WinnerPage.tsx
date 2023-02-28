/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import './WinnerPageStyle.css';
import { useSound } from '../Layout/Layout';

interface IScore {
  score: number
}

export const WinnerPage = ({ score }: IScore) => {
  const { sound } = useSound();
  const winMusic = () => {
    const path = require('../../assets/mp3/mexicomus.mp3');
    return new Audio(path);
  };

  const updateDataScore = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: JSON.parse(localStorage.getItem('user') || ''),
        score: JSON.parse(localStorage.getItem('score') || ''),
      }),
    };
    const response = await fetch(
      '/api/updatescore',
      requestOptions,
    );
    const data = await response.json();
  };

  const sendData = () => {
    const storageScore = JSON.parse(localStorage.getItem('score') || '');
    if (storageScore) {
      localStorage.setItem('score', (score + +storageScore).toString());
      updateDataScore();
      window.dispatchEvent(new Event('storage'));
    } else {
      localStorage.setItem('score', (score).toString());
      updateDataScore();
      window.dispatchEvent(new Event('storage'));
    }
  };

  if (sound) {
    winMusic().play();
  }
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
