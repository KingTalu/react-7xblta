import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Reminder from "./Reminder";
import Documentation from "./Documentation";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/reminder">Reminder</NavLink></li>
            <li><NavLink to="/documentation">Documentation</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/reminder" component={Reminder}/>
            <Route path="/documentation" component={Documentation}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;