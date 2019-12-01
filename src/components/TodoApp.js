import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Grid, Typography, Paper, AppBar, Toolbar } from '@material-ui/core';
import { TodosProvider } from '../contexts/todosContext';

function TodoApp() {
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
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
