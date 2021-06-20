
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homescreen from './Homescreen';
import Login from './Components/Login/Login';

function App() {
  const user = ""
  return (
    <div className="App">
      <Router>
        
      <Route exact path='/'>
         <Login/>
        </Route>
        <Route exact path='/home'>
         <Homescreen/>
        </Route>
      
      
        
      </Router>
      
    </div>
  )
}

export default App;
