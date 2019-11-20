import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { addTodo, removeTodo, toggleCompleted, editTodo } from '../actions';
import { Grid, Typography, Paper, AppBar, Toolbar } from '@material-ui/core';
import { getRandomId } from '../helpers';

function TodoApp() {
	const initialState = [ { id: getRandomId(), task: 'Practice React Hooks', completed: false } ];
	const [ todos, setTodos ] = useState(initialState);

	function handleAddTodo(task) {
		setTodos(addTodo(todos, task));
	}

	function handleRemoveTodo(todoId) {
		setTodos(removeTodo(todos, todoId));
	}

	function handleToggleCompleted(todoId) {
		setTodos(toggleCompleted(todos, todoId));
	}

	function handleEditTodo(todoId, newTodoTask) {
		setTodos(editTodo(todos, todoId, newTodoTask));
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
					<TodoForm addTodo={handleAddTodo} />
					<TodoList
						todos={todos}
						removeTodo={handleRemoveTodo}
						toggleCompleted={handleToggleCompleted}
						editTodo={handleEditTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
