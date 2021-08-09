import React, { useState } from 'react';

function CounterHook() {


  const arr = useState(0);
  // console.log(arr);
  const counter = arr[0]
  const setCounter = arr[1]

  return ( <div>
    <h2>Counter</h2>
    <h2>{counter}</h2>
    <button>-</button>
    <button onClick={() => setCounter(counter+1)}>+</button>
  </div> );
}
 
export default CounterHook;