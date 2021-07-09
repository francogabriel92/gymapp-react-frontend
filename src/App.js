import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clientService from './services/client';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Login from './pages/Login';
import Account from './pages/Account';
import AddClient from './pages/AddClient';
import Footer from './components/Footer';
import PublicHomePage from './pages/PublicHomePage';
import Loading from './components/Loading';
import SignUp from './pages/SignUp';

const App = () => {
  const [ user, setUser ] = useState(null);
  const [ clientList, setClientList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  // GET USER FROM LOCAL STORAGE
  useEffect( () => {
    const loggedUserJSON = window.localStorage.getItem('loggedGymAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    };
  }, [] );
  // GET CLIENTS FROM DB
  useEffect(()=> {
    const getClients = async () => {
      try{
        setIsLoading(true);
        const response = await clientService.get(user.token);
        if (response.status === 200) {
          setIsLoading(false);
          setClientList(response.data);
        } 
      }
      catch (error) {
        setIsLoading(false);
        window.localStorage.removeItem('loggedGymAppUser');
        setUser(null);
      };
    };
    getClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return(
    <Router>
      <div>
        <Navigation user={user} />
        <Switch>
          <Route path="/login">
            <Login loginHandler={setUser} />
          </Route>
          <Route path="/clients">
            <Clients
              user={user}
              userHandler={setUser}
              clientList={clientList}
              setClientList={setClientList}
            />
          </Route>
          <Route path="/account">
            <Account loginHandler={setUser} />
          </Route>
          <Route path="/addclient">
            <AddClient
              user={user}
              clientList={clientList}
              clientListHandler={setClientList}
            />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path="/">
            { user
              ? (isLoading
                ? <Loading /> 
                : <Dashboard
                    clientList={clientList}
                    setClientList={setClientList}
                    user={user}
                  />) 
              : <PublicHomePage /> 
            }
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
