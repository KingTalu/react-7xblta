import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import MenuButton from "./MenuButton";
import Home from "/src/Home.js";
import Reminder from "./src/Reminder.js";
import Documentation from "./src/Documentation.js";
import Menu from "./Menu";

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }

  render() {
    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
              menuVisibility={this.state.visible}/>

      <HashRouter>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/reminder" component={Reminder} />
            <Route path="/documentation" component={Documentation} />
          </div>
      </HashRouter>
       </div>
    );
  }
}

export default Main;