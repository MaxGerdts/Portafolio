import React from 'react';
import photoMax from '../../assets/foto.webp';

export const Home = () => {
  return (
    <section id='home' className='home'>
      <div className='container'>
        <div className='home__content'>
          <div className='home__contentImage'>
            <img src={photoMax} alt='Max photos' />
          </div>
          <h1 className='home__title'>Max Gerdts R.</h1>
          <h3 className='home__skills'>Skills</h3>
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
