import React from 'react';
import { NavLink } from 'react-router-dom';

export const About = () => {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <div className='about__content'>
          <div className='about__photo'>Photo</div>
          <div className='about__resume'>
            <h2 className='about__title'>Un poco sobre mi</h2>
            <p className='about__paragraph'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              blanditiis perspiciatis ea natus, dolorem provident, eum doloribus
              sequi minima nesciunt omnis quae accusantium nihil praesentium
              dolorum ullam aut, quaerat tempora.
            </p>
            <p className='about__paragraph'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              blanditiis perspiciatis ea natus, dolorem provident, eum doloribus
              sequi minima nesciunt omnis quae accusantium nihil praesentium
              dolorum ullam aut, quaerat tempora.
            </p>
            <div className='about__personalInformationRow'>
              <div className='about__personalInformationCol'>
                <ul className='about__list'>
                  <li className='about__listItem'>
                    <span className='about__key'>Nombre:</span>
                    <span className='about__value'>Max Gerdts Rodríguez</span>
                  </li>
                  <li className='about__listItem'>
                    <span className='about__key'>Edad:</span>
                    <span className='about__value'>25 años</span>
                  </li>
                  <li className='about__listItem'>
                    <span className='about__key'>Correo electronico:</span>
                    <span className='about__value'>
                      max.gerdt95@hotmail.com
                    </span>
                  </li>
                </ul>
              </div>
              <div className='about__personalInformationCol'>
                <ul className='about__list'>
                  <li className='about__listItem'>
                    <span className='about__key'>Celular:</span>
                    <span className='about__value'>+57 301 362 94 52</span>
                  </li>
                  <li className='about__listItem'>
                    <span className='about__key'>Pais:</span>
                    <span className='about__value'>Colombia</span>
                  </li>
                  <li className='about__listItem'>
                    <span className='about__key'>Ciudad:</span>
                    <span className='about__value'>Barranquilla/Atlantico</span>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink
              activeClassName='active'
              className='about__button'
              exact
              to='#skills'
            >
              Habilidades
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
