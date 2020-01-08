import React, { useContext } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import TodoItem from './TodoItem';
import { TodosContext } from '../contexts/todosContext';
import useLocationCurrentList from '../hooks/useLocationCurrentList';

function TodoList() {
  const todos = useContext(TodosContext);
  const listId = useLocationCurrentList().id;
  // filter todos by location
  const filteredTodos = todos.filter(todo => todo.listId === listId);

  if (filteredTodos.length === 0) {
    return null;
  }

  return (
    <Paper>
      <List>
        {filteredTodos.length > 0 && (
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
