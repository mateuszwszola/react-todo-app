import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { TodosProvider } from '../contexts/todosContext';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 1)
  },
  gridContainer: {
    marginTop: theme.spacing(3)
  }
}));

function TodoApp(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.gridContainer}>
        <Grid item xs={12} sm={9} md={7} lg={5}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoApp;
