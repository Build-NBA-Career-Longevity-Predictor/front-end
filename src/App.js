import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//local imports below
import Register from "./Components/Register";
import Login from "./Components/Login";
import PlayerList from "./Components/PlayerList";

function App() {
  //Everything related to react routes here
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/playerlist" component={PlayerList} />
      </Router>
    </div>
  );
}

export default App;
