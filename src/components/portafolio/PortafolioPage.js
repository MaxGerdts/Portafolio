import React from 'react';
import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';
import { About } from './About';
import { Experience } from './Experience';
import { Home } from './Home';
import { Projects } from './Projects';
import { Services } from './Services';
import { Skills } from './Skills';

export const PortafolioPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
};
