import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" name="home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
