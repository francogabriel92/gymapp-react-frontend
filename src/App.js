import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import BusinessHome from './pages/BusinessHome';
import BusinessClient from './pages/BusinessClient';

const App = () => {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/clients'>Clients</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/'>
            <BusinessHome />
          </Route>
          <Route path='/clients'>
            <BusinessClient />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
