import React, { Component } from "react";

import './App.css';
import CenteredGrid from "./pages";

import ViewPage from "./pages/viewplan";

import FinalView from "../demo/src/renderer";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
         <Route exact path="/" component={CenteredGrid} />
         <Route path="/viewplan" render={()=><ViewPage/>} />
      </Router>
    );
  }
}

export default App;
