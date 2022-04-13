import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Login from "./Auth/Login/Login";
import Signup from "./Auth/SignUp/SignUp";
import React from "react";
import GuestDashboard from "./Guest/Dashboard/Dashboard";
import HostDashboard from "./Host/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContexts";
import AddListing from "./Host/AddListing/AddListing";
import ListingPage from "./ListingPage/ListingPage";

function App() {
    return (
        <>
            <div className='align-items-center justify-content-center'>
                <div className='w-100'>
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <Route exact path='/' component={MainPage} />
                                <Route exact path='/login' component={Login} />
                                <Route
                                    exact
                                    path='/signup'
                                    component={Signup}
                                />
                                <Route
                                    exact
                                    path='/guestdash'
                                    component={GuestDashboard}
                                />
                                <Route
                                    exact
                                    path='/hostdash'
                                    component={HostDashboard}
                                />
                                <Route
                                    exact
                                    path='/addlisting'
                                    component={AddListing}
                                />
                                <Route
                                    exact
                                    path='/listingpage/:id'
                                    component={ListingPage}
                                />
                            </Switch>
                        </AuthProvider>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default App;
