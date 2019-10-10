import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';

import Home from '~/pages/Home';

const App = () => (
  <BrowserRouter>
    <ScrollContext>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </ScrollContext>
  </BrowserRouter>
);

export default App;
