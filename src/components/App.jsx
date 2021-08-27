import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Currencies from './Currencies.jsx';
import Exchange from './Exchange.jsx';

const App = () => (
  <Router>
    <div>
        <ul>
          <li>
            <Link to="/currencies">Currencies</Link>
          </li>
          <li>
            <Link to="/exchange">Exchange</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
    </div>
    <Switch>
      <Route path="/currencies">
        <Currencies />
      </Route>
      <Route path="/exchange">
        <Exchange />
      </Route>
      <Route path="/">
        <div>Hello</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
