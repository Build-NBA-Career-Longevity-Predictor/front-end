import React from "react";
import { Router, Route } from "react-router-dom";

//local imports below
import Register from "./Components/Register";
import Login from "./Components/Login";
import PlayerList from "./Components/PlayerList";
import PrivateRoute from "./Components/PrivateRoute";
import Navbar from "./Components/Navbar";
import history from "./History/history";
import "./App.css";

function App() {
  //Everything related to react routes here
  return (
    <div
      className="App"
      style={{ display: "flex", width: "100%", overflowY: "hidden" }}
    >
      <Router history={history}>
        <div
          style={{
            width: "13%",
            background: "#C9082A",
            height: "100vh"
          }}
        >
          <Navbar />
        </div>
        <div
          style={{
            width: "87%",
            height: "100vh"
          }}
        >
          <PrivateRoute exact path="/" component={PlayerList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </div>
  );
}

export default App;
