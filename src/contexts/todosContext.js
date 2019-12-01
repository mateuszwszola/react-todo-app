import React, { createContext } from 'react';
import useTodosState from '../hooks/useTodosState';

const initialTodos = [
  { id: 1, task: 'Practice React Hooks', completed: true },
  { id: 2, task: 'Build an amazing app', completed: false }
];

const TodosContext = createContext();

function TodosProvider(props) {
  const todosState = useTodosState(initialTodos);
  return (
    <TodosContext.Provider value={todosState}>
      {props.children}
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider };
