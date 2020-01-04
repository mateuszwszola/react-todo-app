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

function AddNewList({ isEdit, setIsEdit }) {
  const dispatch = useContext(TodoListsDispatchContext);
  const classes = useStyles();

  const handleIconClick = () => {
    if (!isEdit) {
      dispatch({ type: 'ADD_LIST', name: 'name' });
      setIsEdit(true);
    }
  };

  return (
    <div className={classes.addListContainer}>
      <IconButton onClick={handleIconClick}>
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
