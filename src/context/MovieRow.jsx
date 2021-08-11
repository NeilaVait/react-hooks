import React, { useContext } from 'react';
import UserContext from './UserContext';

export default function MovieRow() {
  const userContext = useContext(UserContext);
  return <div>{userContext.user.name} is sitting in 7th movie row</div>;
}
