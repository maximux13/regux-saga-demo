import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter: ({this.props.count})</h1>
        <button onClick={this.props.increment}>[+]</button>
        <button onClick={this.props.decrement}>[-]</button>

        <button onClick={this.props.asyncIncrement}>[*+]</button>
      </div>
    );
  }
}

export default Counter;
