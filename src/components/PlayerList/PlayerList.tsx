/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { LoadingAnimation } from '../LoadingAnimation';
import { PlayerInfo } from '../PlayerInfo';
import './PlayerListStyle.css';

interface IData {
  login: string;
  score: number;
  avatar: number;
}

export const PlayerList = () => {
  const testArr = [1, 2, 1];
  const [load, setLoad] = useState(false);
  const [users, setUsers]: any = useState([]);

  const getAllUsers = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('http://localhost:3001/', requestOptions);
    const data = await response.json();
    const result: IData[] = Array.from(data);
    const dataArr: object[] = [];
    result.forEach((item) => {
      dataArr.push({ login: result[result.indexOf(item)].login, score: result[result.indexOf(item)].score, avatar: result[result.indexOf(item)].avatar });
    });
    // localStorage.setItem('data', (JSON.stringify(dataArr)));
    // window.dispatchEvent(new Event('storage'));
    setLoad(true);
    setUsers(dataArr);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(users);

  if (!load) {
    return (
      <div className="loading_page">
        <LoadingAnimation />
      </div>
    );
  }
  return (
    <div className="play-list">
      <div className="play-list__container">
        <h3>Our The Best culinary experts!</h3>
        <div className="user__table">
          {users.map((el: IData, i: number) => <PlayerInfo key={el.login} props={el} number={i + 1} />)}
        </div>
      </div>
    </div>
  );
};
