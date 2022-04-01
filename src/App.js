import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  MainPage from "./MainPage/MainPage";
function App() {
  return (
   <>
      <div className="align-items-center justify-content-center">
        <div className="w-100">
        <Router>
        <Switch>
        <Route exact path="/" component={MainPage}/>
        </Switch>
        </Router>
        </div>
      </div>
   </>
  );
}

export default App;
