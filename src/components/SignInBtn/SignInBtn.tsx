import React from 'react';
import { Link } from 'react-router-dom';

interface IloginBtn {
  textBtn: string;
  className: string
  openSignInPopUp: (el: boolean) => void;
  setUserRegistered: (el: string) => void;
}

export const SignInBtn = ({
  textBtn, className, openSignInPopUp, setUserRegistered,
}: IloginBtn) => {
  const logOutUser: React.MouseEventHandler<HTMLButtonElement> = (element) => {
    if (element.currentTarget.textContent === 'Sign Up') {
      openSignInPopUp(true);
      return;
    }
    localStorage.clear();
    window.dispatchEvent(new Event('storage'));
    setUserRegistered('Sign In');
  };

  return (
    <button type="button" className={className} onClick={logOutUser}>
      <Link className="btn__link" to="/authorize">{textBtn}</Link>
      <div className="icon__button" />
    </button>
  );
};
