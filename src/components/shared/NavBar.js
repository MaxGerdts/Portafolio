import React from 'react';
//import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { ToggleTheme } from './ToggleTheme';

export const NavBar = () => {
  return (
    <nav className='navbar'>
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
            to='#portafolio'
          >
            Portafolio
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
