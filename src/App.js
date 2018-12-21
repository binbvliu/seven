import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/posts' component={Home}></Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
