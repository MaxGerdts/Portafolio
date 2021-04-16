import React from 'react';
import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <header id='header' className='header'>
      <div className='container'>
        <div className='header__content'>
          <div>
            <a href='#header'> MaxLogo </a>
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  );
};
