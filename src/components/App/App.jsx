import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import {
  LandingPage,
  AboutPage,
  HomePage,
  NotFoundPage
} from '../../components';

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
