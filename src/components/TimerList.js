import Timer from './Timer';
import React from 'react';
import { TimerContext } from "../store/TimerContext";

const TimerList = () => {

  return (
    <TimerContext.Provider
    value={this.state}
    >
    <Timer/>
    </TimerContext.Provider>
  );
}

export default TimerList;