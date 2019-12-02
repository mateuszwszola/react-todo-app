import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { TodosProvider } from '../contexts/todosContext';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 1)
  },
  gridContainer: {
    marginTop: theme.spacing(3)
  }
}));

function TodoApp() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container justify="center" className={classes.gridContainer}>
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
