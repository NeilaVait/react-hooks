import React, { useReducer } from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function ReducerCounter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: 'decrement' });
  };

  const resetCounter = () => {
    dispatch({ type: 'reset' });
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
