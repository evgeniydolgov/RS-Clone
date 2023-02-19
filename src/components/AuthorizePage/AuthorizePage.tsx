/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthiorizeBtn } from '../AuthiorizeBtn';
import { AuthorizePopup } from '../AuthiorizePopup';
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

  const register = async (el: React.MouseEvent) => {
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
      const response = await fetch('http://localhost:3001/register', requestOptions);
      const data = await response.json();
      if (data.message === 'Account is already existed!') {
        setRegisterStatus('Account is already existed!');
        setTimeout(() => {
          setRegisterStatus('');
        }, 2000);
      } else {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(`${JSON.parse(requestOptions.body).login}`));
        localStorage.setItem('score', JSON.stringify('0'));
        localStorage.setItem('avatar', JSON.stringify('0'));
        window.dispatchEvent(new Event('storage'));
        setRegisterStatus('Account created!');
      }
    }
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
      localStorage.setItem('user', JSON.stringify(`${data[0].login}`));
      localStorage.setItem('score', JSON.stringify(`${data[0].score}`));
      localStorage.setItem('avatar', JSON.stringify(`${data[0].avatar}`));
      window.dispatchEvent(new Event('storage'));
      setUserLogged('LogOut');
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
              />
              <AuthiorizeBtn textBtn={userLogged} className="authorize__button" openPopUp={setLoginPopupActive} setUserLogged={setUserLogged} />
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
            <input type="text" id="loginRegister" onChange={(el) => { setLogin(el.target.value); }} maxLength={10} required />
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
        <button type="submit" className="popup__button" onClick={loginAction} disabled={!login || !password}>Login</button>
        <p>{loginStatus}</p>
      </LoginPopup>
    </div>
  );
};
