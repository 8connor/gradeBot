import React, { Component } from "react";
import Top from "./Components/Nav";
import Bottom from "./Components/Foot";
// import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <Top />
        <Switch>
          <Route path="/">
            <Dashboard />

            {/* <Login /> */}
          </Route>
        </Switch>
        <Bottom />
      </Router>
    );
  }
}

export default App;
