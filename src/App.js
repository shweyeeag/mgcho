import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route, HashRouter} from "react-router-dom";
import './App.css';
import Home from "./Home";
import YourTomorrow from "./YourTomorrow";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <HashRouter>
          <Switch>
            <Route path="/mgcholarp" component={Home} />
            <Route path="/mgchoyourtmr" component={YourTomorrow} />
          </Switch>
        </HashRouter>
        <p> To little Mg Cho </p>
        <p> By Shwe Yee Aung :P </p>


      </div>
    );
  }
}

export default App;
