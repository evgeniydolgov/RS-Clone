import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthorizePopup } from '../AuthiorizePopup';
import { LoginPopup } from '../LoginPopup/LoginPopup';
import './AuthorizePageStyles.css';

export const AuthorizePage = () => {
  const [authorizePopupActive, setAuthorizePopupActive] = useState(false);
  const [loginPopupActive, setLoginPopupActive] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');

  const register = async (el: React.MouseEvent) => {
    el.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login,
        password,
      }),
    };
    const response = await fetch('http://localhost:3001/register', requestOptions);
    const data = await response.json();
    console.log(data);
    setRegisterStatus('Account created!');
  };

  const loginAction = async (el: React.MouseEvent) => {
    el.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login,
        password,
      }),
    };
    const response = await fetch(
      'http://localhost:3001/login',
      requestOptions,
    );
    const data = await response.json();
    if (data.length > 0) {
      console.log(response);
      console.log(data);
      setLoginStatus('Welcome!');
      localStorage.setItem('user', JSON.stringify(`${data[0].login} ${data[0].password}`));
    } else {
      setLoginStatus('Wrong details');
    }
  };

  return (
    <div className="authorize__container">
      <div className="authorize__vegetables">
        <div className="upper__container">
          <div className="motto__block">
            <p className="motto">
              We`ve been waiting for you!
            </p>
            <p className="submotto">
              Here you will find many
              <br />
              interesting recipes!
            </p>
          </div>
        </div>
        <div className="middle__container">
          <div className="logo__block">
            <div className="logo__center" />
            <button type="button" className="button__center">
              <Link className="white__text" to="/recipe"> View recipes</Link>
            </button>
          </div>
          <div className="signing__block">
            <p className="signing__text">
              Sign up and get
              <br />
              more features!
            </p>
            <div className="signing__buttons">
              <button type="button" className="authorize__button" onMouseDown={() => setAuthorizePopupActive(true)}>
                <p className="authorize__button__text">Sign Up</p>
                <div className="icon__button" />
              </button>
              <button type="button" className="authorize__button" onMouseDown={() => setLoginPopupActive(true)}>
                <p className="authorize__button__text">Login</p>
                <div className="icon__button" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AuthorizePopup active={authorizePopupActive} setActive={setAuthorizePopupActive}>
        <p>Dear friend!</p>
        <p>To get access to Cooking Quiz, please, register below:</p>
        <p>
          <label htmlFor="loginRegister">
            Login&nbsp;
            <input type="text" id="loginRegister" onChange={(el) => { setLogin(el.target.value); }} required />
          </label>
        </p>
        <p>
          <label htmlFor="passwordRegister">
            Password&nbsp;
            <input type="password" id="passwordRegister" onChange={(el) => { setPassword(el.target.value); }} required />
          </label>
        </p>
        <button type="submit" className="popup__button" onClick={register}>Sign Up</button>
        <p>{registerStatus}</p>
      </AuthorizePopup>
      <LoginPopup active={loginPopupActive} setActive={setLoginPopupActive}>
        <p>Nice to see you!</p>
        <p>Please, enter your login and password below:</p>
        <p>
          <label htmlFor="loginLogin">
            Login&nbsp;
            <input type="text" id="loginLogin" onChange={(el) => { setLogin(el.target.value); }} required />
          </label>
        </p>
        <p>
          <label htmlFor="passwordLogin">
            Password&nbsp;
            <input type="password" id="passwordLogin" onChange={(el) => { setPassword(el.target.value); }} required />
          </label>
        </p>
        <button type="submit" className="popup__button" onClick={loginAction}>Login</button>
        <p>{loginStatus}</p>
      </LoginPopup>
    </div>
  );
};
