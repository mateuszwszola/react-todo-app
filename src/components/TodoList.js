import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { Paper, List, Divider } from '@material-ui/core';
import { TodosContext } from '../contexts/todosContext';

function TodoList() {
  const { todos } = useContext(TodosContext);

  if (todos.length === 0) {
    return null;
  }

  return (
    <Paper>
      <List>
        {todos.length > 0 ? (
          <>
            {todos.map((todo, idx) => (
              <React.Fragment key={todo.id}>
                <TodoItem todo={todo} />
                {todos.length - 1 > idx && <Divider />}
              </React.Fragment>
            ))}
          </>
        ) : (
          <p>No Todos</p>
        )}
      </List>
    </Paper>
  );
}

export default TodoList;
