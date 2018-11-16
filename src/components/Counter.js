import React from 'react';
import Reset from './Reset'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.zeroCounter = this.zeroCounter.bind(this);
  }

  incrementCounter() {
    this.setState(state => ({
      counter: this.state.counter + 1,
    }));
  }

  decrementCounter() {
    this.setState(state => ({
      counter: this.state.counter - 1,
    }));
  }

  zeroCounter() {
    this.setState(state => ({
      counter: 0,
    }));
  }

  render() {
    return (
      <div id="counter">
        <p>{this.state.counter}</p>
        <button type="button" onClick={this.incrementCounter}>plus</button>
        <button type="button" onClick={this.decrementCounter}>minus</button>
        <Reset zeroCounter={this.zeroCounter}/>
      </div>
    );
  }
}

export default Counter;
