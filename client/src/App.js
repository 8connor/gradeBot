// we going to bring in the hook, since this is a functional component
import React from "react";
import ReactDom from "react-dom";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";


function App() {
  // exact will match the route exactly
  return (
    <NavBar />
  );
}

export default App;
