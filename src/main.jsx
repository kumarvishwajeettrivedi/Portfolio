import React, { useState, useRef, useEffect } from 'react';

import hamMenu from './assets/images/ham-menu.png';
import cross from './assets/images/cross-inc.png';
import './main.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamMenuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          hamMenuRef.current && !hamMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img src='./projectimg/images/my_image.jpg' alt="logo-vishwajeet" className="header__logo-img" />
          </div>
          <span className="header__logo-sub">Vishwajeet Kumar</span>
        </div>
        <div className="header__main">
          <ul className={`header__links ${isMenuOpen ? 'header__links--hidden' : ''}`}>
            <li className="header__link-wrapper">
              <a href="./" className="header__link">Home</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">About</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link">Projects</a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link">Contact</a>
            </li>
          </ul>
          <div
            className={`header__main-ham-menu-cont ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            ref={hamMenuRef}
          >
            <img
              src={isMenuOpen ? cross : hamMenu}
              alt={isMenuOpen ? "close menu" : "hamburger menu"}
              className="header__main-ham-menu"
            />
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${isMenuOpen ? 'header__sm-menu--open' : ''}`} ref={menuRef}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./" onClick={handleMenuItemClick}>Home</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./#about" onClick={handleMenuItemClick}>About</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./#projects" onClick={handleMenuItemClick}>Projects</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./#contact" onClick={handleMenuItemClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
