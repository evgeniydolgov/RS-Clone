/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthiorizeBtn } from '../AuthiorizeBtn';
import { AuthorizePopup } from '../AuthiorizePopup';
import { LoadingAnimation } from '../LoadingAnimation';
import { LoginPopup } from '../LoginPopup/LoginPopup';
import { SignInBtn } from '../SignInBtn/SignInBtn';
import './AuthorizePageStyles.css';

export const AuthorizePage = (props: any) => {
  const [authorizePopupActive, setAuthorizePopupActive] = useState(false);
  const [loginPopupActive, setLoginPopupActive] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');
  const [userLogged, setUserLogged] = useState('LogIn');
  const [userRegistered, setUserRegistered] = useState('Sign Up');
  const [loading, setLoading] = useState(false);

  const register = async (el: React.MouseEvent) => {
    setLoading(true);
    el.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login,
        password,
        score: 0,
        avatar: 0,
      }),
    };
    if (JSON.parse(requestOptions.body).login === '' || JSON.parse(requestOptions.body).password === '') {
      alert('Attention! Login or / and password cannot be empty!');
    } else {
      const response = await fetch('/api/register', requestOptions);
      const data = await response.json();
      setLoading(false);
      if (data.message === 'Account is already existed!') {
        setRegisterStatus('Account is already existed!');
      } else {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(`${JSON.parse(requestOptions.body).login}`));
        localStorage.setItem('score', JSON.stringify('0'));
        localStorage.setItem('avatar', JSON.stringify('0'));
        window.dispatchEvent(new Event('storage'));
        setRegisterStatus('Account created!');
        setUserLogged('LogOut');
      }
    }
  };

  const loginAction = async (el: React.MouseEvent) => {
    setLoading(true);
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
      '/api/login',
      requestOptions,
    );
    const data = await response.json();
    setLoading(false);
    if (data.length > 0) {
      setLoginStatus('Welcome!');
      localStorage.setItem('user', JSON.stringify(`${data[0].login}`));
      localStorage.setItem('score', JSON.stringify(`${data[0].score}`));
      localStorage.setItem('avatar', JSON.stringify(`${data[0].avatar}`));
      window.dispatchEvent(new Event('storage'));
      setUserLogged('LogOut');
    } else {
      setLoginStatus('Wrong details');
    }
  };

  const loginInput = React.useRef(null);
  const loginElement: any = loginInput.current;
  const passwordInput = React.useRef(null);
  const passwordElement: any = passwordInput.current;
  const loginSignup = React.useRef(null);
  const loginSignupEl: any = loginSignup.current;
  const passwordSignup = React.useRef(null);
  const passwordSignupEl: any = passwordSignup.current;

  return (
    <div className="authorize__container">
      <div className="authorize__vegetables">
        <div className="motto__block">
          We`ve been waiting for you!
          <br />
          Here you will find many
          <br />
          interesting recipes!
        </div>
        <div className="middle__container">
          <div className="logo__block">
            <div className="logo__center" />
            <Link className="white__text" to="/">
              <button type="button" className="button__center">
                View recipes
              </button>
            </Link>
          </div>
          <div className="signing__block">
            <p className="signing__text">
              Sign up and get
              <br />
              more features!
            </p>
            <div className="signing__buttons">
              <SignInBtn
                textBtn={userRegistered}
                className="authorize__button"
                openSignInPopUp={setAuthorizePopupActive}
                setUserRegistered={setUserRegistered}
                setRegisterStatus={setRegisterStatus}
                loginSignupEl={loginSignupEl}
                passwordSignupEl={passwordSignupEl}
              />
              <AuthiorizeBtn
                textBtn={userLogged}
                className="authorize__button"
                openPopUp={setLoginPopupActive}
                setUserLogged={setUserLogged}
                setLoginStatus={setLoginStatus}
                loginElement={loginElement}
                passwordElement={passwordElement}
              />
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
            <input
              type="text"
              id="loginRegister"
              className="loginRegister"
              onChange={(el) => {
                setLogin(el.target.value);
              }}
              maxLength={10}
              ref={loginSignup}
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="passwordRegister">
            Password&nbsp;
            <input
              type="password"
              id="passwordRegister"
              className="passwordRegister"
              onChange={(el) => {
                setPassword(el.target.value);
              }}
              ref={passwordSignup}
              required
            />
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
            <input type="text" id="loginLogin" className="loginLogin" onChange={(el) => { setLogin(el.target.value); }} ref={loginInput} required />
          </label>
        </p>
        <p>
          <label htmlFor="passwordLogin">
            Password&nbsp;
            <input
              type="password"
              id="passwordLogin"
              className="passwordLogin"
              onChange={(el) => {
                setPassword(el.target.value);
              }}
              ref={passwordInput}
              required
            />
          </label>
        </p>
        <button type="submit" className="popup__button" onClick={loginAction} disabled={!login || !password}>Login</button>
        <p>{loginStatus}</p>
      </LoginPopup>
      {loading ? <div className="authorize__loader"><LoadingAnimation /></div> : null }
    </div>
  );
};
