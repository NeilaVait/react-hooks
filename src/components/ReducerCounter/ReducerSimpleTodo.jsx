import React, { useReducer, useState } from 'react';

const ACTION = {
  ADD_TODO: 'add-todo',
};

function todoReducer(todosArr, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todosArr, newTodo(action.payload)];

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
    <form onSubmit={todoSubmitHandler}>
      <h4>ReducerSimpleTodo</h4>
      <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Enter todo" />
    </form>
  );
}

export default ReducerSimpleTodo;
