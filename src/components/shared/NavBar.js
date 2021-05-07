import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { ToggleTheme } from './ToggleTheme';

export const NavBar = () => {
  useEffect(() => {
    const labelMobileMenu = document.querySelector('.navbar__labelMobileMenu');
    labelMobileMenu.addEventListener('click', () => {
      const inputMobileMenu = document.querySelector(
        '.navbar__inputMobileMenu'
      );
      inputMobileMenu.checked
        ? (document.getElementsByTagName('html')[0].style.overflow = 'auto')
        : (document.getElementsByTagName('html')[0].style.overflow = 'hidden');
    });
  });
  return (
    <nav className='navbar'>
      <label
        htmlFor='navbar__inputMobileMenu'
        className='navbar__labelMobileMenu'
      >
        <i className='fas fa-bars'></i>
      </label>
      <input
        id='navbar__inputMobileMenu'
        className='navbar__inputMobileMenu'
        type='checkbox'
      />
      <ul className='navbar__list'>
        <li className='navbar__listItem'>
          <NavHashLink
            smooth
            activeClassName='active'
            className='navbar__link'
            to='#home'
          >
            Inicio
          </NavHashLink>
        </li>
        <li className='navbar__listItem'>
          <NavHashLink
            smooth
            activeClassName='active'
            className='navbar__link'
            to='#about'
          >
            Acerca
          </NavHashLink>
        </li>
        <li className='navbar__listItem'>
          <NavHashLink
            smooth
            activeClassName='active'
            className='navbar__link'
            exact
            to='#services'
          >
            Servicios
          </NavHashLink>
        </li>
        <li className='navbar__listItem'>
          <NavHashLink
            smooth
            activeClassName='active'
            className='navbar__link'
            exact
            to='#projects'
          >
            Proyectos
          </NavHashLink>
        </li>
        <li className='navbar__listItem'>
          <NavHashLink
            smooth
            activeClassName='active'
            className='navbar__link'
            exact
            to='#experience'
          >
            Experiencia
          </NavHashLink>
        </li>
        <li className='navbar__listItem'>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
};
