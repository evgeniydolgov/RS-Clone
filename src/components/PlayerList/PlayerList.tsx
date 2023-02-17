/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { PlayerInfo } from '../PlayerInfo';
import './PlayerListStyle.css';

export const PlayerList = () => {
  const testArr = [1, 2, 1];

  return (
    <div className="play-list">
      <div>Our The Best culinary experts</div>
      <ol>
        <PlayerInfo />
      </ol>
    </div>
  );
};
