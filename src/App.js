import React, { useEffect } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Inside from './Comp/Inside'
import Signup from './Comp/Signup'
import Signin from './Comp/Signin'
import { useStateValue } from "./Comp/StateProvider";
import axios from './axios'

function App() {

  const [ state , dispatch] = useStateValue();

  useEffect(() => {
    axios.get('/getAllUsers')
    .then((data) => dispatch({
      type: "SET__USERS",
      users: data.data
    }) )
  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home">
            <Inside />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/"> 
          <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
