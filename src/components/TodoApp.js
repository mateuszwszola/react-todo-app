import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Grid, Typography, Paper, AppBar, Toolbar } from '@material-ui/core';
import { getRandomId } from '../helpers';

function TodoApp() {
	const initialState = [ { id: getRandomId(), task: 'Practice React Hooks', completed: false } ];
	const [ todos, setTodos ] = useState(initialState);

	function addTodo(task) {
		setTodos(todos.concat({ id: getRandomId(), task, completed: false }));
	}

	function removeTodo(todoId) {
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
		setTodos(updatedTodos);
	}

	function toggleCompleted(todoId) {
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
		setTodos(updatedTodos);
	}
	function editTodo(todoId, newTodoTask) {
		const updatedTodos = todos.map(
			(todo) =>
				todo.id === todoId
					? {
							...todo,
							task: newTodoTask
						}
					: todo
		);
		setTodos(updatedTodos);
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
			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={11} sm={9} md={7} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						toggleCompleted={toggleCompleted}
						editTodo={editTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
