import logo from './logo.svg';
import './App.css';
import { Routes ,Route,Router } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContexts";
import Signup from "./Auth/SignUp/SignUp";
import Login from "./Auth/Login/Login";
function App() {
  return (
   <>
      <div className="align-items-center justify-content-center">
        <div className="w-100">
          <Router>
            <AuthProvider>
            <Routes>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            </Routes>
            </AuthProvider>
          </Router>
        </div>
      </div>
   </>
  );
}

export default App;
