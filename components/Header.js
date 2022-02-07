import React from 'react';
import styled from '../styles/components/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const openContainerNav = () => {
    document.getElementById('containerMenu').style.width = '100%';
  };
  const closeContainerNav = () => {
    document.getElementById('containerMenu').style.width = '0';
  };

  return (
    <>
      <div className={styled['open-nav-container']}>
        <button onClick={openContainerNav} className={styled['open-nav-container__button']}>
          <FontAwesomeIcon icon={faBars} className={styled['open-nav-container__button--icon']} />
        </button>
      </div>
      <div id='containerMenu' className={styled['nav-container']}>
        <div className={styled['button-close-container']}>
          <button onClick={closeContainerNav} className={styled['close-nav-container-button']}>
            <FontAwesomeIcon
              icon={faTimes}
              className={styled['close-nav-container-button__button']}
            />
          </button>
        </div>
        <div className={styled['brand']}>
          <img src='' alt='' />
        </div>
        <nav className={styled['links-container']}>
          <ul className={styled['links-list']}>
            <li className={styled['item-list']}>
              <a href='#!'>ToA4</a>
            </li>
            <li className={styled['item-list']}>
              <a href='#!'>Explain of Code</a>
            </li>

            <li className={styled['item-list']}>
              <a href='#!'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
