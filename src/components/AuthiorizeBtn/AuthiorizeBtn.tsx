/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

interface IloginBtn {
  textBtn: string;
  className: string
  openPopUp: (el: boolean) => void;
  setUserLogged: (el: string) => void;
}

export const AuthiorizeBtn = ({
  textBtn, className, openPopUp, setUserLogged,
}: IloginBtn) => {
  const logOutUser: React.MouseEventHandler<HTMLButtonElement> = (element) => {
    if (element.currentTarget.textContent === 'LogIn') {
      openPopUp(true);
      return;
    }
    localStorage.clear();
    window.dispatchEvent(new Event('storage'));
    setUserLogged('LogIn');
  };

  return (
    <button type="button" className={className} onClick={logOutUser}>
      <Link className="btn__link" to="/authorize">{textBtn}</Link>
      <div className="icon__button" />
    </button>
  );
};
