import React from "react";

// Set up brand new component using classes
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this); // giving access to current component instance again
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // handler function as class methods
  handleDecrement() {
    // console.log(this); // Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
    // this.setState({ count: 10 });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  // every single react component that is written with classes needs to include render method
  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
