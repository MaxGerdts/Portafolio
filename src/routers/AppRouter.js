import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { PortafolioPage } from '../components/portafolio/PortafolioPage';

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/'>
            <PortafolioPage />
          </Route>
          <Redirect to='/' />
        </Switch>
      </>
    </Router>
  );
};
