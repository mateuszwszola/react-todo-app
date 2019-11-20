import React from 'react';
import PropTypes from 'prop-types';
import useInputState from '../hooks/useInputState';
import { Paper, TextField, Input } from '@material-ui/core';

function TodoForm({ addTodo }) {
	const [ task, handleTaskChange, handleReset ] = useInputState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (task !== '') {
			addTodo(task);
			handleReset();
		}
	}

	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form onSubmit={handleSubmit}>
				<TextField value={task} onChange={handleTaskChange} margin="normal" label="Add new todo" fullWidth />
				{/* <Input type="submit" value="Add Todo" /> */}
			</form>
		</Paper>
	);
}

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired
};

export default TodoForm;
