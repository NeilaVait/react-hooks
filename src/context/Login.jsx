import React, { useContext } from 'react';
import UserContext from './UserContext';

export default function Login() {
  const userContext = useContext(UserContext);
  console.log(userContext);
  return (
    <div>
      <button onClick={() => userContext.onLogin('Bob')}>Login Bob</button>
      <button onClick={() => userContext.onLogin('James')}>Login James</button>
    </div>
  );
}
