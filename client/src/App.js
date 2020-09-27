// we going to bring in the hook, since this is a functional component
import React from "react";
import NavBar from "./Components/NavBar";


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
        <UnPrivateRoute path="/adminCreateUser"  roles={["admin"]} component={AdminCreateUser} />
      </MainBody>
      <Footer />
    </Router>
    <NavBar />

  );
}

export default App;
