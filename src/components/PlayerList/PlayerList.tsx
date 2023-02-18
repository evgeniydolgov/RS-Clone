/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { PlayerInfo } from '../PlayerInfo';
import './PlayerListStyle.css';

interface IData {
  login: string;
  score: number;
  avatar: number;
}

export const PlayerList = () => {
  const testArr = [1, 2, 1];

  const getAllUsers = async (el: React.MouseEvent) => {
    el.preventDefault();
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('http://localhost:3001/', requestOptions);
    const data = await response.json();
    const dataArr: object[] = [];
    const result: IData[] = Array.from(data);
    result.forEach((item) => {
      dataArr.push({ login: result[result.indexOf(item)].login, score: result[result.indexOf(item)].score, avatar: result[result.indexOf(item)].avatar });
    });
    console.log(dataArr);
    localStorage.setItem('data', (JSON.stringify(dataArr)));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="play-list">
      <button type="button" onClick={getAllUsers} className="summon">Show`em all!</button>
      <div>Our The Best culinary experts</div>
      <ol>
        <PlayerInfo />
      </ol>
      {localStorage.getItem('data')}
    </div>
  );
};
