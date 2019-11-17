import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { Paper, List, Divider } from '@material-ui/core';

function TodoList({ todos, removeTodo, toggleCompleted, editTodo }) {
  const sortedByCompleteTodos = todos.sort((a, b) => !a.completed ? -1 : 1); 
	return (
		<Paper>
			<List>
        {todos.length > 0 ? (
          <>
          {sortedByCompleteTodos.map((todo, idx) => (
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
	toggleCompleted: PropTypes.func.isRequired
};

export default TodoList;
