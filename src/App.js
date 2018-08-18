import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route, HashRouter} from "react-router-dom";
import './App.css';
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">

        <HashRouter>
          <Switch>
            <Route path="/mgcholarp" component={Home} />
          </Switch>
        </HashRouter>



      </div>
    );
  }
}

export default App;
