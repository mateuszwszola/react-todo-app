import React, { useContext } from 'react';
import { TodoListsDispatchContext } from '../contexts/todoListsContext';

import { IconButton, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  addListContainer: {
    padding: theme.spacing(2)
  }
}));

function AddNewList(props) {
  const dispatch = useContext(TodoListsDispatchContext);
  const classes = useStyles();

  return (
    <div className={classes.addListContainer}>
      <IconButton onClick={e => dispatch({ type: 'ADD_LIST', name: 'name' })}>
        <AddIcon />
      </IconButton>
      <Typography
        style={{ marginLeft: '8px' }}
        component="span"
        variant="subtitle1"
        color="textSecondary"
      >
        New list
      </Typography>
    </div>
  );
}

export default AddNewList;
