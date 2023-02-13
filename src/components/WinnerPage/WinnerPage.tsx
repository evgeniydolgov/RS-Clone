import React from 'react';
import { Link } from 'react-router-dom';
import './WinnerPageStyle.css';

interface IScore {
  score: number
}

export const WinnerPage = ({ score }: IScore) => {
  const sendData = () => {
    console.log('данные ушли');
  };
  return (
    <div className="winpage">
      <div className="winpage_container">
        <h2>Congratulations!</h2>
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
