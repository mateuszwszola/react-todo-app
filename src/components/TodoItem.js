import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';

function TodoItem({ todo, removeTodo, toggleCompleted }) {
	function handleRemoveTodo() {
		removeTodo(todo.id);
	}
	function handleToggleCompleted() {
		toggleCompleted(todo.id);
	}
	return (
		<ListItem style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			<ListItemText onClick={handleToggleCompleted}>{todo.task}</ListItemText>{' '}
			<button onClick={handleRemoveTodo}>X</button>
		</ListItem>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	removeTodo: PropTypes.func.isRequired,
	toggleCompleted: PropTypes.func.isRequired
};

export default TodoItem;
