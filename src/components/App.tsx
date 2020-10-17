import React, { ReactElement, useState } from 'react';
import Navbar from './Navbar';

function App(): ReactElement {
  const [loggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar
        links={{
          linkOne: { name: 'Home', url: '/home', active: true },
          linkTwo: { name: 'Create Deed', url: '/create' },
          linkThree: { name: 'Logout', url: '/logout' },
        }}
      />
    </div>
  );
}

export default App;
