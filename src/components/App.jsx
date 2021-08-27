import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Home from './Home.jsx';
import ComponentError from './Component.jsx';
import NotFound from './NotFound.jsx';

const App = () => (
    <Router>
      <div className="d-flex flex-column h-100">
        <Switch>
          <Route path="/example-error">
            <ComponentError />
          </Route>
          <Route path="/signup">
            <SignUp t={t} />
          </Route>
          <Route path="/login">
            <Login t={t} />
          </Route>
          <PrivateRoute path="/">
            <Home
              t={t}
              addChannelModal={addChannelModal}
              removeChannelModal={removeChannelModal}
              renameChannelModal={renameChannelModal}
            />
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
        {renderModal(modalData, hideModal, t)}
      </div>
    </Router>
  );

export default App;
