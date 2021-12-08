import React, { Component } from "react";

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      message2: "",
    };
  }

  componentDidMount() {
    this.setState({
      message: "welcome to the jungle",
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message2 === this.state.message2) {
      this.setState({
        message2: "quiz are awesome :)",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.message2}</h1>
        <h1>{this.props.fromClass}</h1>
      </div>
    );
  }
}
