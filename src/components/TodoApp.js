import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Typography, Paper, AppBar, Toolbar } from '@material-ui/core';
import { getRandomId } from '../helpers';

function TodoApp() {
	const initialState = [ { id: getRandomId(), task: 'Practice React Hooks', completed: false } ];
	const [ todos, setTodos ] = useState(initialState);

	function addTodo(task) {
		setTodos(todos.concat({ id: getRandomId(), task, completed: false }));
	}

	function removeTodo(todoId) {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	}

	function toggleCompleted(todoId) {
		const todoIdx = todos.findIndex((todo) => todo.id === todoId);

		setTodos([
			...todos.slice(0, todoIdx),
			{
				...todos[todoIdx],
				completed: !todos[todoIdx].completed
			},
			...todos.slice(todoIdx + 1)
		]);
	}

	return (
		<Paper
			style={{
				backgroundColor: '#fafafa',
				padding: 0,
				margin: 0,
				height: '100vh'
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />
		</Paper>
	);
}

export default TodoApp;
