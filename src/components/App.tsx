import React, { ReactElement, useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { login } from '../apiacess';

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
                    // active: true,
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
                    // active: true,
                  },
                  linkTwo: {
                    name: 'Sign up',
                    url: '/signup',
                  },
                  linkThree: { name: 'Sign in', url: '/login' },
                }
          }
        />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/login">
            <Login
              onSubmit={(user) => {
                login(user, (status) => console.log(status));
              }}
            />
          </Route>
          <Route path="/signup">
            <Signup
              onSubmit={() => {
                setIsLoggedIn(true);
              }}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
