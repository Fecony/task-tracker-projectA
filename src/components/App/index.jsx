import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../Landing';

import * as ROUTES from '../../constants/routes';
import HomePage from '../Home';
import NotFoundPage from '../NotFoundPage';
import AboutPage from '../About/index';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ABOUT} component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
