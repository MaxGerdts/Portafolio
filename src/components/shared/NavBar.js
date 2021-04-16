import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleTheme } from './ToggleTheme';

export const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__listItem'>
          <NavLink
            activeClassName='active'
            className='navbar__link'
            exact
            to='#home'
          >
            Inicio
          </NavLink>
        </li>
        <li className='navbar__listItem'>
          <NavLink
            activeClassName='active'
            className='navbar__link'
            exact
            to='#about'
          >
            Acerca
          </NavLink>
        </li>
        <li className='navbar__listItem'>
          <NavLink
            activeClassName='active'
            className='navbar__link'
            exact
            to='#services'
          >
            Servicios
          </NavLink>
        </li>
        <li className='navbar__listItem'>
          <NavLink
            activeClassName='active'
            className='navbar__link'
            exact
            to='#portafolio'
          >
            Portafolio
          </NavLink>
        </li>
        <li className='navbar__listItem'>
          <NavLink
            activeClassName='active'
            className='navbar__link'
            exact
            to='#experience'
          >
            Experiencia
          </NavLink>
        </li>
        <li className='navbar__listItem'>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
};
