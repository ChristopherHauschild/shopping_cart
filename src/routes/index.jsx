import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Cart } from '../pages/Cart';

const Routes = () => (
  <Switch>
    <Route path="/my-cart" component={Cart} />
    <Redirect to="/my-cart" component={Cart} />
  </Switch>
);

export default Routes;
