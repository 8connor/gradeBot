
// we going to bring in the hook, since this is a functional component
import React from 'react';

import Top from "./Components/Nav";
import Bottom from "./Components/Foot";
import SideNav from "./Components/SideNav";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import CreateForm from "./Components/CreateForm";
import AllAssignments from "./Components/AllAssignments";
import AdminCreateUser from "./Components/AdminCreateUser";
import ClassCreate from "./Components/ClassCreate";

import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  // exact will match the route exactly 
  return (
    <Router>
      <Top/>

        <Route exact path="/" component={Home} />
        <UnPrivateRoute path="/login" component={Login}/>
        <PrivateRoute path="/dashboard" roles={["student","admin","teacher"]} component={Dashboard}/>
        <PrivateRoute path="/createForm" roles={["student","admin","teacher"]} component={CreateForm}/>
        <PrivateRoute path="/allAssignments" roles={["student","admin","teacher"]} component={AllAssignments}/>
        <PrivateRoute path="/classCreate" roles={["student","admin","teacher"]} component={ClassCreate}/>

        {/* Only Admin has access to the links below */}
        <Route path="/adminCreateUser" component={AdminCreateUser}/>

      <Bottom/>
    </Router>
  );
}

export default App;


