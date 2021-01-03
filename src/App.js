import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Inside from './Comp/Inside'
import Signup from './Comp/Signup'
import Signin from './Comp/Signin'

function App() {
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
