import React, { useContext } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { TodoListsDispatchContext } from '../contexts/todoListsContext';
import useInputState from '../hooks/useInputState';

const useStyles = makeStyles(theme => ({
  addListContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  form: {
    marginRight: theme.spacing(1)
  }
}));

function AddNewList() {
  const dispatch = useContext(TodoListsDispatchContext);
  const classes = useStyles();
  const [listName, handleListNameChange, handleListNameReset] = useInputState(
    ''
  );

  const addNewList = () => {
    if (listName !== '') {
      dispatch({ type: 'ADD_LIST', name: listName });
      handleListNameReset();
    }
  };

  return (
    <div className={classes.addListContainer}>
      <form
        className={classes.form}
        onSubmit={e => {
          e.preventDefault();
          addNewList();
        }}
      >
        <TextField
          value={listName}
          onChange={handleListNameChange}
          label="List Name"
          variant="outlined"
          size="small"
        />
      </form>
      <IconButton onClick={addNewList}>
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default AddNewList;
