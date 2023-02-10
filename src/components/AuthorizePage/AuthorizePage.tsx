import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthorizePopup } from '../AuthiorizePopup';
import './AuthorizePageStyles.css';

export const AuthorizePage = () => {
  const [popupActive, setPopupActive] = useState(false);

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
              <button type="button" className="authorize__button" onMouseDown={() => setPopupActive(true)}>
                <p className="authorize__button__text">Sign Up</p>
                <div className="icon__button" />
              </button>
              <button type="button" className="authorize__button">
                <p className="authorize__button__text">Login</p>
                <div className="icon__button" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AuthorizePopup active={popupActive} setActive={setPopupActive}>
        <p>Dear friend!</p>
        <p>To get access to Cooking Quiz, please, register below:</p>
        <p>
          <label htmlFor="login">
            Login&nbsp;
            <input type="text" id="login" />
          </label>
        </p>
        <p>
          <label htmlFor="password">
            Password&nbsp;
            <input type="password" id="password" />
          </label>
        </p>
        <button type="button" className="popup__button">Sign Up</button>
      </AuthorizePopup>
    </div>
  );
};
