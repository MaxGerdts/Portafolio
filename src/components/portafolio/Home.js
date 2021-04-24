import React, { useEffect } from 'react';
import Typed from 'typed.js';

//import photoMax from '../../assets/foto.webp';
import gato from '../../assets/gato.webp';

export const Home = () => {
  useEffect(() => {
    new Typed('.home__typed', {
      stringsElement: '.home__typedStrings',
      backSpeed: 50,
      typeSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
  });

  return (
    <section id='home' className='home'>
      <div className='container'>
        <div className='home__content'>
          <div className='home__containerPhoto'>
            <img src={gato} alt='Max photos' />
          </div>
          <h1 className='home__title'>Max Gerdts R.</h1>
          <div className='home__skills'>
            <div className='home__typedStrings'>
              <p>Desarrollador Front End</p>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Bootstrap</p>
              <p>SASS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React JS</p>
              <p>Jquery</p>
              <p>Git</p>
              <p>Metodología SCRUM</p>
            </div>
            <span className='home__typed'></span>
          </div>
          <ul className='home__social'>
            <li className='home__socialItem'>
              <a
                className='home__socialLink'
                href='https://www.linkedin.com/in/max-gerdts-rodriguez-64a38319a/'
                target='_blank'
                rel='noopener noreferrer'
                title='Linkedin'
              >
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
