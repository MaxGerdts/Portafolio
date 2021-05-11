import React from 'react';

//import gato from '../../assets/gato.webp';
import ChileCompra from '../../assets/chilecompra.webp';
import WOM from '../../assets/wom.webp';
import Coopeuch from '../../assets/coopeuch.webp';
import Easy from '../../assets/easy.webp';

export const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className='container'>
        <h2 className='projects__title'>Mis proyectos</h2>
        <div className='projects__contentRow'>
          <div className='projects__contentCol'>
            <div className='projects__content'>
              <div className='projects__containerCompanyLogo'>
                <h3 className='projects__subTitle'>ChileCompra CL</h3>
                <img
                  src={ChileCompra}
                  className='projects__companyLogo'
                  alt='Max photos'
                />
              </div>
              <p className='projects__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                enim exercitationem consequatur
              </p>
            </div>
          </div>
          <div className='projects__contentCol'>
            <div className='projects__content'>
              <div className='projects__containerCompanyLogo'>
                <h3 className='projects__subTitle'>WOM CL</h3>
                <img
                  src={WOM}
                  className='projects__companyLogo'
                  alt='Max photos'
                />
              </div>
              <p className='projects__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                enim exercitationem consequatur
              </p>
            </div>
          </div>
          <div className='projects__contentCol'>
            <div className='projects__content'>
              <div className='projects__containerCompanyLogo'>
                <h3 className='projects__subTitle'>Coopeuch CL</h3>
                <img
                  src={Coopeuch}
                  className='projects__companyLogo'
                  alt='Max photos'
                />
              </div>
              <p className='projects__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                enim exercitationem consequatur
              </p>
            </div>
          </div>
          <div className='projects__contentCol'>
            <div className='projects__content'>
              <div className='projects__containerCompanyLogo'>
                <h3 className='projects__subTitle'>Easy CL</h3>
                <img
                  src={Easy}
                  className='projects__companyLogo'
                  alt='Max photos'
                />
              </div>
              <p className='projects__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                enim exercitationem consequatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
