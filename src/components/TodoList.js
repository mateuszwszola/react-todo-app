import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { Paper, List } from '@material-ui/core';

function TodoList({ todos, removeTodo, toggleCompleted }) {
	return (
		<Paper>
			<List>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />
				))}
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
