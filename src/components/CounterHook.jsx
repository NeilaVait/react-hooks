import React, { useState } from 'react';
import useDocumentTitle from './../hook/useDocumentTitle';

function CounterHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  // componentdidmouny
  // componentdidupdate
  // useEffect() vietoj dvieju virsuj
  // custom user hook
  useDocumentTitle(`${name} has clicked + ${counter} times`);

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
