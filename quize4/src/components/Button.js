import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return <input type="button" value={this.props.name} className="btn" />;
  }
}
