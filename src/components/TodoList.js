import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TodoItem from './TodoItem';
import { Paper, List, Divider } from '@material-ui/core';
import { TodosContext } from '../contexts/todosContext';

function TodoList() {
  let todos = useContext(TodosContext);
  let { listName } = useParams();
  listName = listName || 'tasks';
  // filter todos by location
  todos = todos.filter(todo => todo.list === listName);

  if (todos.length === 0) {
    return null;
  }

  return (
    <Paper>
      <List>
        {todos.length > 0 && (
          <>
            {todos.map((todo, idx) => (
              <React.Fragment key={todo.id}>
                <TodoItem todo={todo} />
                {todos.length - 1 > idx && <Divider />}
              </React.Fragment>
            ))}
          </>
        )}
      </List>
    </Paper>
  );
}

export default TodoList;
