import React, { createContext } from 'react';
import todoListsReducer from '../reducers/todoListsReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const initialLists = [
  {
    id: '1',
    name: 'tasks',
    url: '/',
    role: 'main'
  },
  {
    id: '2',
    name: 'important',
    url: '/important',
    role: 'main'
  },
  {
    id: '3',
    name: 'planned',
    url: '/planned',
    role: 'main'
  },
  {
    id: '4',
    name: 'work',
    url: '/work',
    role: 'custom'
  },
  {
    id: '5',
    name: 'private',
    url: '/private',
    role: 'custom'
  },
  {
    id: '6',
    name: 'groceries',
    url: '/groceries',
    role: 'custom'
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
