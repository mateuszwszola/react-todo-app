import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { Paper, List, Divider } from '@material-ui/core';
import { TodosContext } from '../contexts/todosContext';
import { TodoListsContext } from '../contexts/todoListsContext';
import useLocationListName from '../hooks/useLocationListName';

function TodoList() {
  let todos = useContext(TodosContext);
  const todoLists = useContext(TodoListsContext);
  const listName = useLocationListName();
  // find listId based on current location (viewed list)
  let listId;
  const list = todoLists.find(list => list.name === listName);
  if (list) {
    listId = list.id;
  }

  // filter todos by location
  const filteredTodos = todos.filter(todo => todo.listId === listId);

  if (filteredTodos.length === 0) {
    return null;
  }

  return (
    <Paper>
      <List>
        {todos.length > 0 && (
          <>
            {filteredTodos.map((todo, idx) => (
              <React.Fragment key={todo.id}>
                <TodoItem todo={todo} />
                {filteredTodos.length - 1 > idx && <Divider />}
              </React.Fragment>
            ))}
          </>
        )}
      </List>
    </Paper>
  );
}

export default TodoList;
