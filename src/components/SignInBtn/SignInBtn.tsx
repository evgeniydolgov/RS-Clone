import React from 'react';
import { Link } from 'react-router-dom';

interface IloginBtn {
  textBtn: string;
  className: string
  openSignInPopUp: (el: boolean) => void;
  setUserRegistered: (el: string) => void;
  setRegisterStatus: (el: string) => void;
  loginSignupEl: any;
  passwordSignupEl: any;
}

export const SignInBtn = ({
  textBtn, className, openSignInPopUp, setUserRegistered, setRegisterStatus, loginSignupEl, passwordSignupEl,
}: IloginBtn) => {
  const logOutUser: React.MouseEventHandler<HTMLButtonElement> = (element) => {
    if (element.currentTarget.textContent === 'Sign Up') {
      setRegisterStatus('');
      openSignInPopUp(true);
      loginSignupEl.value = '';
      passwordSignupEl.value = '';
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
