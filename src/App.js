import logo from "./logo.svg";
import "./App.css";
//import { Routes ,Route,Router } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContexts";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Signup from "./Auth/SignUp/SignUp";
import Login from "./Auth/Login/Login";
import Dashboard from "./Guest/Dashboard/Dashboard";
import React, { Component } from "react";

function App() {
    return (
        <>
            <div className='align-items-center justify-content-center'>
                <div className='w-100'>
                    {/* <Router>
          
            <Routes>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            </Routes>
           
  </Router>*/}
                    <Dashboard></Dashboard>
                </div>
            </div>
        </>
    );
}

export default App;
