import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <HashRouter>
      <div id="flyoutMenu"
           className={visibility}>
            <button id="close"
              onMouseDown={this.props.handleMouseDown}>close</button>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/reminder">Reminder</NavLink></li>
            <li><NavLink to="/documentation">Documentation</NavLink></li>
          </ul>
      </div>
      </HashRouter>
    );
  }
}

export default Menu;
