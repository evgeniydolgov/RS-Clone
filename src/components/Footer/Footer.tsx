import React from 'react';
import './FooterStyles.css';

export const Footer = () => (
  <footer className="footer">
    <div className="footer-wrapper">
      <ul className="github-list">
        <li><a href="https://github.com/evgeniydolgov"><div className="git-img">{}</div></a></li>
        <li><a href="https://github.com/harry177"><div className="git-img">{}</div></a></li>
        <li><a href="https://github.com/grishanova-oa"><div className="git-img">{}</div></a></li>
      </ul>
      <div className="test-div" />
    </div>
  </footer>
);
