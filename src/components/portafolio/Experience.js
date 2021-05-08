import React from 'react';

export const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <div className='container'>
        <h2 className='experience__title'>Mi Experiencia</h2>
        <div className='experience__timeline'>
          <div className='experience__leftContentRow'>
            <div className='experience__contentCol'>
              <div className='experience__content experience__leftContent'>
                <h3 className='experience__position'>
                  Desarrollador Front End
                </h3>
                <h4 className='experience__company'>VTEX</h4>
                <h5 className='experience__date'>Mayo 2020 - Actualidad</h5>
                <p className='experience__description'>
                  Desarrollador Front End con la plataforma VTEX
                </p>
              </div>
            </div>
          </div>
          <div className='experience__rightContentRow'>
            <div className='experience__contentCol'>
              <div className='experience__content experience__rightContent'>
                <h3 className='experience__position'>
                  Desarrollador Front End
                </h3>
                <h4 className='experience__company'>Grupo AKAES/ITGlobers</h4>
                <h5 className='experience__date'>Diciembre 2020 - Mayo 2021</h5>
                <p className='experience__description'>
                  Desarrollador Front End con la plataforma VTEX
                </p>
              </div>
            </div>
          </div>
          <div className='experience__leftContentRow'>
            <div className='experience__contentCol'>
              <div className='experience__content experience__leftContent'>
                <h3 className='experience__position'>Analista de soporte</h3>
                <h4 className='experience__company'>
                  Xpectrum Technologies SAS
                </h4>
                <h5 className='experience__date'>
                  Septiembre 2019 - Septiembre 2020
                </h5>
                <p className='experience__description'>
                  Desarrollador Front End con la plataforma Magento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
