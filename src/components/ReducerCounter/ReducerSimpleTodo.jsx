import React, { useReducer, useState } from 'react';
import Rtodo from './Rtodo';

export const ACTION = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
};

function todoReducer(todosArr, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todosArr, newTodo(action.payload)];
    case ACTION.TOGGLE_TODO:
      return todosArr.map((t) => {
        if (action.payload === t.id) return { ...t, done: !t.done };
        return t;
      });
    default:
      return todosArr;
  }
}

function newTodo(newTodoTitle) {
  return { id: Date.now(), title: newTodoTitle, done: false };
}

function ReducerSimpleTodo() {
  const [todosArr, dispatch] = useReducer(todoReducer, []);
  const [title, setTitle] = useState('');

  function todoSubmitHandler(e) {
    e.preventDefault();
    if (title.trim().length === 0) return;
    console.log(title);
    dispatch({ type: ACTION.ADD_TODO, payload: title });
    setTitle('');
  }

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <h4>ReducerSimpleTodo</h4>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Enter todo" />
      </form>
      <h5>List</h5>
      <ul>
        {todosArr.map((t) => (
          <Rtodo key={t.id} item={t} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
}

export default ReducerSimpleTodo;
