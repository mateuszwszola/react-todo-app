import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { TodosProvider } from '../contexts/todosContext';
import { TodoListsContext } from '../contexts/todoListsContext';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 1)
  },
  gridContainer: {
    marginTop: theme.spacing(3)
  }
}));

function TodoApp(props) {
  const todoLists = useContext(TodoListsContext);
  let { listName } = useParams();
  listName = listName || 'tasks';

  const listNameExists =
    todoLists.filter(list => list.name === listName).length > 0;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.gridContainer}>
        <Grid item xs={12} sm={9} md={7} lg={5}>
          <TodosProvider>
            {listNameExists ? (
              <>
                <TodoForm />
                <TodoList />
              </>
            ) : (
              <h2>{listName} list does not exists</h2>
            )}
          </TodosProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoApp;
