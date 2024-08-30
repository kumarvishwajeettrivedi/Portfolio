import React from 'react';
import linkedinIco from './assets/images/linkdin-inc.png';
import githubIco from './assets/images/github-inc.png';
import codechef from './assets/images/codechef-inc.png';
import ytIco from './assets/images/yt-inc.png';
import instaIco from './assets/images/instagram-inc.png';

import './footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="bg"></div>
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <div className="main-footer__social-cont">
              <a href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242" aria-label="LinkedIn">
                <img src={linkedinIco} alt="LinkedIn Icon" className="main-footer__icon" />
              </a>
              <a href="https://github.com/kumarvishwajeettrivedi" aria-label="GitHub">
                <img src={githubIco} alt="GitHub Icon" className="main-footer__icon" />
              </a>
              <a href="https://www.codechef.com/users/kalkin07" aria-label="CodeChef">
                <img src={codechef} alt="CodeChef Icon" className="main-footer__icon" />
              </a>
              <a href="https://www.youtube.com" aria-label="YouTube">
                <img src={ytIco} alt="YouTube Icon" className="main-footer__icon" />
              </a>
              <a href="https://www.instagram.com/curious_insan/" aria-label="Instagram">
                <img src={instaIco} alt="Instagram Icon" className="main-footer__icon" />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Vishwajeet Kumar</h4>
            <p className="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis tempora explicabo quae quod deserunt.
            </p>
          </div>
        </div>
        <div className="main-footer__lower">
          &copy; Copyright 2024. Made by Vishwajeet Kumar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
