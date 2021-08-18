import React, { useReducer } from 'react';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

function countReducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    case ACTION.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

function ReducerCounter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTION.INCREMENT });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: ACTION.DECREMENT });
  };

  const resetCounter = () => {
    dispatch({ type: ACTION.RESET });
  };

  return (
    <div>
      <h4>ReducerCounter</h4>
      <h2>{state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default ReducerCounter;
