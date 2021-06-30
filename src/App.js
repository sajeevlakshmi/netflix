import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Homescreen from "./Homescreen";
import Login from "./Components/Login/Login";
import NewUser from "./Components/NewUser/NewUser";

function App() {
  const user = "";
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Homescreen />
          </Route>
          <Route exact path="/newUser">
          <NewUser/>
        </Route>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
