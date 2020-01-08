import React, { useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import slugify from 'slugify';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Edit as EditIcon, Done as DoneIcon } from '@material-ui/icons';
import useToggleState from '../hooks/useToggleState';
import useInputState from '../hooks/useInputState';
import useLocationCurrentList from '../hooks/useLocationCurrentList';
import { TodoListsDispatchContext } from '../contexts/todoListsContext';

const useStyles = makeStyles(theme => ({
  capitalize: {
    textTransform: 'capitalize'
  },
  editInput: {
    color: 'white',
    backgroundColor: 'transparent',
    outline: '0',
    border: 'none',
    fontSize: '1.5rem'
  },
  headerIcon: {
    marginLeft: theme.spacing(2)
  }
}));

function HeaderListName({
  isEdit,
  toggleIsEdit,
  currentList,
  handleSaveListName,
  inputRef,
  listNameVal,
  handleListNameValChange
}) {
  const classes = useStyles();

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
              ref={inputRef}
              onBlur={() => isEdit && toggleIsEdit()}
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
          <Typography component="h2" variant="h5">
            {currentList.name}
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

HeaderListName.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  toggleIsEdit: PropTypes.func.isRequired,
  currentList: PropTypes.object.isRequired,
  handleSaveListName: PropTypes.func.isRequired,
  inputRef: PropTypes.object.isRequired,
  listNameVal: PropTypes.string.isRequired,
  handleListNameValChange: PropTypes.func.isRequired
};

function HeaderListNameContainer() {
  const history = useHistory();
  const dispatch = useContext(TodoListsDispatchContext);
  const currentList = useLocationCurrentList();
  const [
    listNameVal,
    handleListNameValChange,
    handleListNameReset
  ] = useInputState(currentList.name);
  const [isEdit, toggleIsEdit] = useToggleState(false);
  const inputRef = useRef();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e && e.key === 'Escape' && isEdit) {
        toggleIsEdit();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    } else {
      handleListNameReset();
    }
  }, [isEdit, handleListNameReset]);

  function handleSaveListName() {
    if (currentList.name !== listNameVal) {
      dispatch({
        type: 'CHANGE_NAME',
        name: listNameVal,
        id: currentList.id
      });
      history.push(`${slugify(listNameVal)}-${currentList.id}`);
    }
    toggleIsEdit();
  }

  return (
    <HeaderListName
      isEdit={isEdit}
      toggleIsEdit={toggleIsEdit}
      currentList={currentList}
      handleSaveListName={handleSaveListName}
      inputRef={inputRef}
      listNameVal={listNameVal}
      handleListNameValChange={handleListNameValChange}
    />
  );
}

export default HeaderListNameContainer;
