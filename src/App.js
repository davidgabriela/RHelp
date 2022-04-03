import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Login from "./Auth/Login/Login";
import Signup from "./Auth/SignUp/SignUp";
import React, { Component } from "react";
import Dashboard from "./Guest/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <>
            <div className='align-items-center justify-content-center'>
                <div className='w-100'>
                    {console.log("dsadefef")}
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={MainPage} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/signup' component={Signup} />
                            <Route
                                exact
                                path='/guestdash'
                                component={Dashboard}
                            />
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default App;
