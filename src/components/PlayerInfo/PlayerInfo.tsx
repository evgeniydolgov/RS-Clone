/* eslint-disable react/prop-types */
import React from 'react';
import './PlayerInfoStyle.css';

interface IUser {
  login: string;
  score: number;
  avatar: number;
}
interface Info {
  props: IUser
  number: number;
}

export const PlayerInfo = ({ props, number }: Info) => {
  const nameAvatar = ['userpic', 'burn-arr', 'cool-arr', 'stud-arr', 'super-arr', 'secret-arr', 'sam-arr'];
  const avatar = Number(props.avatar);
  console.log(number);

  return (
    <div className="oneplayer__info">
      <div className="avatar_container">
        <div className={nameAvatar[avatar]}>{}</div>
      </div>
      <div>{props.login}</div>
      <div>
        Score:
        {' '}
        {props.score}
      </div>
    </div>
  );
};
