// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './App';
import Featured from './Components/Featured';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/featured" component={Featured} />
      </Switch>
    </Router>
  );
};

export default Routes;
