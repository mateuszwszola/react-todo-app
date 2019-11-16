import React from 'react';
import useInputState from '../hooks/useInputState';
import { Paper, TextField } from '@material-ui/core';

function TodoForm({ addTodo }) {
	const [ task, handleTaskChange, handleReset ] = useInputState('');

	function handleSubmit(e) {
		e.preventDefault();
		addTodo(task);
		handleReset();
	}

	return (
		<Paper>
			<form onSubmit={handleSubmit}>
				<TextField type="text" value={task} onChange={handleTaskChange} />
				<input type="submit" value="Add Todo" />
			</form>
		</Paper>
	);
}

export default TodoForm;
