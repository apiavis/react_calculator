import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from "./layouts/Home";
import About from "./layouts/About";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Router>
        <div class="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/calculator" component={Calculator} />
              <Route path="/about" component={About} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;