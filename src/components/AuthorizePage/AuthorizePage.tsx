import React from 'react';
import './AuthorizePageStyles.css';

export const AuthorizePage = () => (
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
        </div>
        <div className="signing__block">
          <p className="signing__text">
            Sign up and get
            <br />
            more features!
          </p>
          <div className="signing__buttons" />
        </div>
      </div>
    </div>
  </div>
);
