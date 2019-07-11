import React, { Component } from 'react';

// First we need a new Context
export const CounterContext = React.createContext();

// Next we need a provider
export class CounterProvider extends Component {
  state = {
    counter: 0
  }
  render() {
    return (
      <CounterContext.Provider value={{
        state: this.state,
        addCount: () => this.setState({
          counter: this.state.counter + 1
        }),
        subCount: () => this.setState({
          counter: this.state.counter - 1
        })
      }}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}
