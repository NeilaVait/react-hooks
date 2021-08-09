import React, { useState, useEffect } from 'react';

function CounterHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  // componentdidmouny
  // componentdidupdate
  // useEffect() vietoj dvieju virsuj
  useEffect(() => {
    console.log('useEffect()');
    document.title = `${name} has clicked + ${counter} times`;
    // componentWillUnmount - komponento pasalinimas pvz uzdaryti db prisijungima
    return () => {
      // veikia kaip componentWillUnmount kai antras useEffect argumentas yra []
      console.log('clean up');
    };
  }, []);

  return (
    <div>
      <h2>Counter of {name}</h2>
      <h2>
        {name} has clicked + {counter} times
      </h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setName('James')}>set name to James</button>
      <input type="text" placeholder="enter name" value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  );
}

export default CounterHook;
