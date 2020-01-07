import React, { createContext } from 'react';
import todoListsReducer from '../reducers/todoListsReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import { createInitialTodoLists } from '../helpers';

const TodoListsContext = createContext();
const TodoListsDispatchContext = createContext();

function TodoListsProvider(props) {
  const [todoLists, dispatch] = useLocalStorageReducer(
    'todoLists',
    createInitialTodoLists(),
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
