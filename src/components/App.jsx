import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <div>Hello</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
