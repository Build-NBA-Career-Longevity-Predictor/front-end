import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

//local imports below
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  //Everything related to react routes here
  return (
  <div className="App">
    <Router>
    Hello World
    <Route path="/" component={Register} />
    <Route path="/login" component={Login} />
    </Router>
  </div>
  );
}

export default App;
