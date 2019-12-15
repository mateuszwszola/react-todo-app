import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Input } from '@material-ui/core';
import useToggleState from '../hooks/useToggleState';
import useLocationListName from '../hooks/useLocationListName';
import {
  TodoListsDispatchContext,
  TodoListsContext
} from '../contexts/todoListsContext';
import slugify from 'slugify';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  capitalize: {
    textTransform: 'capitalize'
  },
  editInput: {
    color: 'white',
    fontSize: '1.5rem',
    textTransform: 'capitalize'
  }
}));

function HeaderListName(props) {
  const history = useHistory();
  const dispatch = useContext(TodoListsDispatchContext);
  const todoLists = useContext(TodoListsContext);
  const listName = useLocationListName();
  const classes = useStyles();
  const [isEdit, toggleIsEdit] = useToggleState(false);
  const [listNameVal, setListNameVal] = useState(listName);
  const handleListNameValChange = e => setListNameVal(e.target.value);

  const currentList = todoLists.find(list => list.name === listName);

  useEffect(() => {
    setListNameVal(listName);
  }, [listName]);

  return (
    <>
      {isEdit && currentList.role === 'custom' ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (listName !== listNameVal) {
              dispatch({
                type: 'CHANGE_NAME',
                listName,
                newListName: listNameVal.toLowerCase()
              });
              history.push(slugify(listNameVal.toLowerCase()));
            }
            toggleIsEdit();
          }}
        >
          <Input
            required
            className={classes.editInput}
            value={listNameVal}
            onChange={handleListNameValChange}
          />
        </form>
      ) : (
        <Typography
          className={classes.capitalize}
          onClick={() => currentList.role === 'custom' && toggleIsEdit()}
          component="h2"
          variant="h5"
        >
          {listName}
        </Typography>
      )}
    </>
  );
}

export default HeaderListName;
