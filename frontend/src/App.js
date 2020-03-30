import React from "react";
import "./App.css";
import LoginForm from "./components/loginForm.js";
import RegistrationForm from "./components/registrationForm.js";
import DealTile from "./components/dealTile.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/deal" component={DealTile} />
      </div>
    </Router>
  );
}

export default App;
