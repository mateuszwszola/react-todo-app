import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todosReducer';

const initialTodos = [
  { id: 1, task: 'Practice React Hooks', completed: true },
  { id: 2, task: 'Build an amazing app', completed: false }
];

const TodosContext = createContext();
const TodosDispatchContext = createContext();

function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {props.children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosDispatchContext, TodosProvider };
