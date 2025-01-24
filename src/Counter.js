import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Inițializare stare
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h1>class <mark>Counter</mark> extends <mark>Component</mark></h1>
        <p style={{ color: count > 0 ? "green" : count < 0 ? "red" : "black" }}>
          {count}
        </p>
        <button onClick={this.decrement}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default Counter;

