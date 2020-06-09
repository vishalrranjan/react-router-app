import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import User from './User';
import UserDetails from './UserDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/user" exact component={User} />
          <Route path="/user/:id" exact component={UserDetails} />
          <h2>This is Home</h2>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
