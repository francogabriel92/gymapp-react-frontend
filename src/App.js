import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            { user
              ? <li><Link to="/account">Account</Link></li>
              : <li><Link to="/login">Login</Link></li>
            }
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login loginHandler={setUser} />
          </Route>
          <Route path="/clients">
            <Clients user={user}/>
          </Route>
          <Route path="/account">
            <Account />
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
