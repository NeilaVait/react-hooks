import React, { useReducer, useState } from 'react';
import Rtodo from './Rtodo';

export const ACTION = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
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
    case ACTION.DELETE_TODO:
      return todosArr.filter((t) => {
        return t.id !== action.payload;
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
      {todosArr.length > 0 && (
        <div>
          <h5>List</h5>
          <ul>
            {todosArr.map((t) => (
              <Rtodo key={t.id} item={t} dispatch={dispatch} />
            ))}
          </ul>
        </div>
      )}
      {todosArr.length === 0 && <p>No todos at the moment</p>}
    </>
  );
}

export default ReducerSimpleTodo;
