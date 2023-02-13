import React from 'react';
import './LoginPopup.css';

export const LoginPopup = ({ active, setActive, children }: Props) => (
  <div className={active ? 'authorize__popup active' : 'authorize__popup'} onMouseDown={() => setActive(false)} role="button" tabIndex={0} aria-label="signup">
    <div
      className={active
        ? 'popup__inner active' : 'popup__inner'}
      onMouseDown={(item) => item.stopPropagation()}
      role="button"
      tabIndex={0}
      aria-label="signup"
    >
      {children}
    </div>
  </div>
);

interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
  children: JSX.Element | JSX.Element[];
}
