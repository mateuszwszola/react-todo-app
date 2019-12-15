import React, { createContext } from 'react';
import todosReducer from '../reducers/todosReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const initialTodos = [
  { id: 1, task: 'Practice React Hooks', completed: true, listId: '1' },
  { id: 2, task: 'Build an amazing app', completed: true, listId: '1' }
];

const TodosContext = createContext();
const TodosDispatchContext = createContext();

function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    initialTodos,
    todosReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {props.children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosDispatchContext, TodosProvider };
