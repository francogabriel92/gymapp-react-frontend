import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Login from './pages/Login';
import Account from './pages/Account';

const App = () => {
  const [ user, setUser ] = useState(null);
  // GET USER FROM LOCAL STORAGE
  useEffect( () => {
    const loggedUserJSON = window.localStorage.getItem('loggedGymAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    };
  }, [] );

  return(
    <Router>
      <div>
        <Navigation user={user} />
        <Switch>
          <Route path="/login">
            <Login loginHandler={setUser} />
          </Route>
          <Route path="/clients">
            <Clients user={user} userHandler={setUser} />
          </Route>
          <Route path="/account">
            <Account loginHandler={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
