import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

//import photoMax from '../../assets/foto.webp';
import gato from '../../assets/gato.webp';

export const About = () => {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <div className='about__content'>
          <div className='about__contentPhoto'>
            <img src={gato} alt='Max photos' />
          </div>
          <div className='about__resume'>
            <h2 className='about__title'>Un poco sobre mí</h2>
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
                    <span className='about__key'>Correo electrónico:</span>
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
                    <span className='about__key'>País:</span>
                    <span className='about__value'>Colombia</span>
                  </li>
                  <li className='about__listItem'>
                    <span className='about__key'>Ciudad:</span>
                    <span className='about__value'>Barranquilla/Atlántico</span>
                  </li>
                </ul>
              </div>
            </div>
            <NavHashLink smooth className='about__button' to='#skills'>
              Habilidades
            </NavHashLink>
          </div>
        </div>
      </div>
    </section>
  );
};
