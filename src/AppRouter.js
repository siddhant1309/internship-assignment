// AppRouter.js
import React from 'react';
import { BrowserRouter as BrowserRouterAlias, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Transaction from './components/Transaction';
import Data from './components/Data';
// import { BrowserRouter as BrowserRouterAlias, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouterAlias>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/data" component={Data} />
      </Switch>
    </ BrowserRouterAlias>
  );
};

export default AppRouter;
