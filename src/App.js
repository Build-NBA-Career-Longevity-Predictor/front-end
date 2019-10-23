import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


//local imports below
import Register from "./Components/Register";
import Login from "./Components/Login";
import PlayerList from "./Components/PlayerList";
import PrivateRoute from "./Components/PrivateRoute";
import Navbar from "./Components/Navbar";
import "./App.css";


function App() {
  //Everything related to react routes here
  return (
    <div className="App" style={{ display: "flex", width: "100%" }}>
      <Router>
        <div style={{ width: "15%", background: "#C9082A" }}>
          <Navbar />
        </div>
          <PrivateRoute exact path="/" component={PlayerList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
