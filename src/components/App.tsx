import React, { ReactElement, useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App(): ReactElement {
  const [loggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar
          links={
            loggedin
              ? {
                  linkOne: {
                    name: 'Home',
                    url: '/home',
                    active: true,
                  },
                  linkTwo: {
                    name: 'Create Deed',
                    url: '/create',
                  },
                  linkThree: {
                    name: 'Logout',
                    url: '/logout',
                  },
                }
              : {
                  linkOne: {
                    name: 'About',
                    url: '/',
                    active: true,
                  },
                  linkTwo: {
                    name: 'Register',
                    url: '/signup',
                  },
                  linkThree: { name: 'Login', url: '/login' },
                }
          }
        />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/login">
            <Login
              onSubmit={() => {
                setIsLoggedIn(true);
              }}
            />
          </Route>
          <Route path="/signup">
            <Signup
              onSubmit={() => {
                setIsLoggedIn(true);
              }}
            />
            <Route></Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
