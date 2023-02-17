import React from 'react';
import './FooterStyles.css';

export const Footer = () => (
  <footer className="footer">
    <div className="footer-wrapper">
      <ul className="github-list">
        <li className="github-list__name">Authors:</li>
        <li><a href="https://github.com/evgeniydolgov"><div className="git-img">{}</div></a></li>
        <li><a href="https://github.com/harry177"><div className="git-img">{}</div></a></li>
        <li><a href="https://github.com/grishanova-oa"><div className="git-img">{}</div></a></li>
      </ul>
      <div className="year-creation">2023 ©</div>
      <div className="rs-container"><a href="https://rs.school/"><div className="rs-link">{}</div></a></div>
    </div>
  </footer>
);
