import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import NavBar from './NavBar';
import About from './About';
import User from './User';
import UserDetails from './UserDetails';
import { ProtectedRoute } from './component/protectedRoute/ProtectedRoute';
import { Home } from './Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <ProtectedRoute path="/user" exact component={User} />
          <ProtectedRoute path="/user/:id" exact component={UserDetails} />
          {/* <Route path="/user/:id" exact component={UserDetails} /> */}
          <Route path="*" component={()=> <h1>404 NOT FOUND</h1>} />   
        </Switch>
      </div>
    </Router>
  );
}

export default App;
