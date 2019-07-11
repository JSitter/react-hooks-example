import React from 'react';
import {CounterContext} from '../store/simpleContext';

function Counter(){
  return(
    <div>
      <CounterContext.Consumer>
        {(context)=>(
          <div>
            <p>Count: {context.state.counter}</p>
            <button onClick={context.addCount}>+</button>
            <button onClick={context.subCount}>-</button>
          </div>
        )
        }
      </CounterContext.Consumer>
    </div>
  )
}

export default Counter;
