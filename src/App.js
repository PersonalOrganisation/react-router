import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <NavLink className="App-link" activeClassName="selected" exact to="/"> Home </NavLink>
        <NavLink className="App-link" activeClassName="selected" to="/notre-histoire"> History </NavLink>

        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notre-histoire" component={History} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
