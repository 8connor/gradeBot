import React, { Component } from "react";
import Top from "./Components/Nav";
import Bottom from "./Components/Foot";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import SideNav from "./Components/SideNav";
import CreateForm from "./Components/CreateForm";
import AllAssignments from "./Components/AllAssignments";
import AdminCreateUser from "./Components/AdminCreateUser";
import ClassCreate from "./Components/ClassCreate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <Top />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" render={
            () => {
              return (
                <>
                  <SideNav />
                  <Dashboard />
                </>
              )
            }
          } />
          <Route exact path="/createAssignment" render={
            () => {
              return (
                <>
                  <SideNav />
                  <CreateForm />
                </>
              )
            }
          } />
           <Route exact path="/allAssignments" render={
            () => {
              return (
                <>
                  <SideNav />
                  <AllAssignments />
                </>
              )
            }
          } />
          <Route exact path="/adminCreateUser" render={
            () => {
              return (
                <>
                  <SideNav />
                  <AdminCreateUser />
                </>
              )
            }
          } />
           <Route exact path="/createClass" render={
            () => {
              return (
                <>
                  <SideNav />
                  <ClassCreate />
                </>
              )
            }
          } />
        </Switch>
        <Bottom />
      </Router>
    );
  }
}

export default App;
