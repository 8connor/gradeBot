// we going to bring in the hook, since this is a functional component
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome-all.css';
import './assets/css/flaticon.css';
import './assets/css/video.min.css';
import './assets/css/progess.css';
import './assets/css/animate.min.css';
//main css
import "./assets/css/menu.css"
import './assets/scss/style.scss';
import 'bootstrap';

import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import CreateForm from "./Components/CreateForm";
import AllAssignments from "./Components/AllAssignments";
import AdminCreateUser from "./Components/AdminCreateUser";
import ClassCreate from "./Components/ClassCreate";
import MainBody from "./Components/MainBody"

import Header from './Components/Header/header';
import AboutUs from './Components/AboutUs/aboutus';
// import LatestNews from './Components/LatestNews/latest_news';
import Teachers from './Components/Teachers/teachers';
import Courses from './Components/Courses/courses';
// import ContactUs from './Components/ContactUs/contact_us';
import Footer from './Components/Footer/footer';

import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {

  // exact will match the route exactly 
  return (

    <Router>
      <Header />
      <Route exact path="/" >
        <AboutUs />
        {/* <LatestNews /> */}
        <Teachers />
        <Courses />
        {/* <ContactUs /> */}
      </Route>

      <MainBody>
        <UnPrivateRoute path="/login" component={Login} />
        <PrivateRoute path="/dashboard" roles={["student", "admin", "teacher"]} component={Dashboard} />
        <PrivateRoute path="/createForm" roles={["student", "admin", "teacher"]} component={CreateForm} />
        <PrivateRoute path="/allAssignments" roles={["student", "admin", "teacher"]} component={AllAssignments} />
        <PrivateRoute path="/classCreate" roles={["student", "admin", "teacher"]} component={ClassCreate} />
        {/* Only Admin has access to the links below */}
        <PrivateRoute path="/adminCreateUser" roles={["admin"]} component={AdminCreateUser} />
      </MainBody>
      <Footer />
    </Router>


  );
}

export default App;


