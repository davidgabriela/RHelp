import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Auth/Login/Login";
import Signup from "./Auth/SignUp/SignUp";
import { AuthProvider } from "./contexts/AuthContexts";
import GuestDashboard from "./Guest/Dashboard/Dashboard";
import AddListing from "./Host/AddListing/AddListing";
import HostDashboard from "./Host/Dashboard/Dashboard";
import ListingPage from "./ListingPage/ListingPage";
import MainPage from "./MainPage/MainPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
    // useEffect(() => {
    //     return auth.signOut();
    // });
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
                                <PrivateRoute
                                    exact
                                    path='/guestdash'
                                    component={GuestDashboard}
                                />
                                <PrivateRoute
                                    exact
                                    path='/hostdash'
                                    component={HostDashboard}
                                />
                                <PrivateRoute
                                    exact
                                    path='/addlisting'
                                    component={AddListing}
                                />
                                <PrivateRoute
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
