import React, { createContext } from 'react';
import todoListsReducer from '../reducers/todoListsReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const initialLists = [
  {
    id: '1',
    name: 'Work',
    url: '/work'
  },
  {
    id: '2',
    name: 'Private',
    url: '/private'
  },
  {
    id: '3',
    name: 'Groceries',
    url: '/groceries'
  }
];

const TodoListsContext = createContext();
const TodoListsDispatchContext = createContext();

function TodoListsProvider(props) {
  const [todoLists, dispatch] = useLocalStorageReducer(
    'todoLists',
    initialLists,
    todoListsReducer
  );

  return (
    <TodoListsContext.Provider value={todoLists}>
      <TodoListsDispatchContext.Provider value={dispatch}>
        {props.children}
      </TodoListsDispatchContext.Provider>
    </TodoListsContext.Provider>
  );
}

export { TodoListsContext, TodoListsDispatchContext, TodoListsProvider };
