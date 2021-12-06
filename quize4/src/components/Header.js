import React, { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Nav name={this.props.name} />
      </div>
    );
  }
}
