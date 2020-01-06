import React, { Component } from "react";
import { Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import MenuLink from "./MenuLink";

class Menu extends Component {
  render() {
    return (
      <div>
        <MenuLink />
        <Route exact path="/" component={App} />
        <Route path="/about/" component={About} />
      </div>
    );
  }
}

export default Menu;
