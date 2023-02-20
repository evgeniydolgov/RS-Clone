import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface IloginBtn {
  textBtn: string;
  className: string
  openPopUp: (el: boolean) => void;
  setUserLogged: (el: string) => void;
  setLoginStatus: (el: string) => void;
  loginElement: any;
  passwordElement: any;
}

export const AuthiorizeBtn = ({
  textBtn, className, openPopUp, setUserLogged, setLoginStatus, loginElement, passwordElement,
}: IloginBtn) => {
  const user = JSON.parse(localStorage.getItem('user') as string);

  useEffect(() => {
    if (user) {
      setUserLogged('LogOut');
    }
  }, []);

  const logOutUser: React.MouseEventHandler<HTMLButtonElement> = (element) => {
    if (element.currentTarget.textContent === 'LogOut') {
      localStorage.clear();
      setLoginStatus('');
      loginElement.value = '';
      passwordElement.value = '';
      setUserLogged('LogIn');
      window.dispatchEvent(new Event('storage'));
      return;
    }
    openPopUp(true);
    localStorage.clear();
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <button type="button" className={className} onClick={logOutUser}>
      <Link className="btn__link" to="/authorize">{textBtn}</Link>
      <div className="icon__button" />
    </button>
  );
};
