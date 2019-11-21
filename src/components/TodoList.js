import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { Paper, List, Divider } from '@material-ui/core';

function TodoList({ todos, removeTodo, toggleCompleted, editTodo }) {
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
              <TodoItem todo={todo} removeTodo={removeTodo} toggleCompleted={toggleCompleted} editTodo={editTodo} />
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

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	removeTodo: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoList;
