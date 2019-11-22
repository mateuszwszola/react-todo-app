import React from 'react';
import useTodosState from '../hooks/useTodosState';
import { getRandomId } from '../helpers';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Grid, Typography, Paper, AppBar, Toolbar } from '@material-ui/core';

function TodoApp() {
	const initialTodos = [ { id: getRandomId(), task: 'Practice React Hooks', completed: false } ];
	const { todos, addTodo, removeTodo, toggleCompleted, editTodo } = useTodosState(initialTodos);

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
