import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import useToggleState from '../hooks/useToggleState';
import useLocationListName from '../hooks/useLocationListName';
import useInputState from '../hooks/useInputState';
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
    backgroundColor: 'transparent',
    outline: '0',
    border: 'none',
    fontSize: '1.5rem',
    textTransform: 'capitalize'
  },
  headerIcon: {
    marginLeft: theme.spacing(2)
  }
}));

function HeaderListName(props) {
  const history = useHistory();
  const dispatch = useContext(TodoListsDispatchContext);
  const todoLists = useContext(TodoListsContext);
  const listName = useLocationListName();
  const classes = useStyles();
  const [isEdit, toggleIsEdit] = useToggleState(false);
  const [listNameVal, handleListNameValChange] = useInputState(listName);

  const currentList = todoLists.find(list => list.name === listName);

  console.log({ listName, currentList });

  // useEffect(() => {
  //   setListNameVal(listName);
  // }, [listName]);

  function handleSaveListName() {
    if (listName !== listNameVal) {
      dispatch({
        type: 'CHANGE_NAME',
        listName,
        newListName: listNameVal.toLowerCase()
      });
      history.push(slugify(listNameVal.toLowerCase()));
    }
    toggleIsEdit();
  }

  return (
    <>
      {isEdit && currentList.role === 'custom' ? (
        <>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSaveListName();
            }}
          >
            <input
              required
              className={classes.editInput}
              value={listNameVal}
              onChange={handleListNameValChange}
            />
          </form>
          <IconButton
            color="inherit"
            aria-label="save todo list name"
            onClick={handleSaveListName}
            className={classes.headerIcon}
          >
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography
            className={classes.capitalize}
            onClick={() => currentList.role === 'custom' && toggleIsEdit()}
            component="h2"
            variant="h5"
          >
            {listName}
          </Typography>
          {currentList.role === 'custom' && (
            <IconButton
              color="inherit"
              aria-label="edit todo list name"
              onClick={toggleIsEdit}
              className={classes.headerIcon}
            >
              <EditIcon />
            </IconButton>
          )}
        </>
      )}
    </>
  );
}

export default HeaderListName;
