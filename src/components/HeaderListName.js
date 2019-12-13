import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, TextField } from '@material-ui/core';
import { TodoListsDispatchContext } from '../contexts/todoListsContext';
import useInputState from '../hooks/useInputState';
import useToggleState from '../hooks/useToggleState';
import { firstLetterUpper } from '../helpers';

function HeaderListName(props) {
  let { listName } = useParams();
  listName = listName || 'tasks';
  const dispatch = useContext(TodoListsDispatchContext);
  const [isEdit, toggleIsEdit] = useToggleState(false);
  const [listNameVal, handleListNameValChange] = useInputState(listName);

  return (
    <Typography color="inherit" component="h2" variant="h5">
      {isEdit ? (
        <form
          onSubmit={e => {
            console.log({
              listName,
              listNameVal
            });
            e.preventDefault();
            dispatch({
              type: 'CHANGE_NAME',
              listName,
              newListName: listNameVal
            });
            toggleIsEdit();
          }}
        >
          <TextField
            value={listNameVal}
            onChange={handleListNameValChange}
            autoFocus
          />
        </form>
      ) : (
        <span onClick={toggleIsEdit}>{firstLetterUpper(listName)}</span>
      )}
    </Typography>
  );
}

export default HeaderListName;
