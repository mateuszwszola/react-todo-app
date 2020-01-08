import React, { useContext, memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  ListItemSecondaryAction
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Done as DoneIcon
} from '@material-ui/icons';
import { TodosDispatchContext } from '../contexts/todosContext';
import useInputState from '../hooks/useInputState';
import useToggleState from '../hooks/useToggleState';

const useStyles = makeStyles(theme => ({
  listItem: {
    height: '64px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2)
  },
  container: {
    width: 'calc(100% - 100px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionsContainer: {
    flex: '100px',
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  nobreak: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  todoText: {
    textDecoration: props => (props.completed ? 'line-through' : 'none'),
    cursor: 'pointer'
  },
  form: {
    width: '90%',
    margin: '0 auto'
  }
}));

function TodoItem({
  todoRef,
  todo,
  isEditting,
  editTaskValue,
  toggleIsEditting,
  handleEditTaskSubmit,
  handleToggleCompleted,
  handleEditTaskValueChange,
  handleRemoveTodo,
  handleSaveTask
}) {
  const classes = useStyles({ completed: todo.completed });

  return (
    <ListItem className={classes.listItem} ref={todoRef}>
      <div className={classes.container}>
        {isEditting ? (
          <form onSubmit={handleEditTaskSubmit} className={classes.form}>
            <TextField
              value={editTaskValue}
              onChange={handleEditTaskValueChange}
              autoFocus
              fullWidth
            />
          </form>
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={todo.completed}
              onChange={handleToggleCompleted}
            />
            <ListItemText
              className={`${classes.nobreak} ${classes.todoText}`}
              onClick={toggleIsEditting}
            >
              {todo.task}
            </ListItemText>
          </>
        )}
      </div>
      <ListItemSecondaryAction className={classes.actionsContainer}>
        {isEditting ? (
          <IconButton onClick={handleSaveTask} aria-label="Save">
            <DoneIcon />
          </IconButton>
        ) : (
          <IconButton onClick={toggleIsEditting} aria-label="Edit">
            <EditIcon />
          </IconButton>
        )}
        <IconButton onClick={handleRemoveTodo} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  isEditting: PropTypes.bool.isRequired,
  editTaskValue: PropTypes.string.isRequired,
  toggleIsEditting: PropTypes.func.isRequired,
  handleEditTaskSubmit: PropTypes.func.isRequired,
  handleToggleCompleted: PropTypes.func.isRequired,
  handleEditTaskValueChange: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
  handleSaveTask: PropTypes.func.isRequired
};

function TodoItemContainer({ todo }) {
  const dispatch = useContext(TodosDispatchContext);
  const [isEditting, toggleIsEditting] = useToggleState(false);
  const [editTaskValue, handleEditTaskValueChange] = useInputState(todo.task);
  const todoRef = useRef(null);

  useEffect(() => {
    function toggleEditOnEscape(event) {
      if (
        isEditting &&
        event &&
        event.type === 'keydown' &&
        event.key === 'Escape'
      ) {
        toggleIsEditting();
      }
    }
    if (isEditting) {
      window.addEventListener('keydown', toggleEditOnEscape);
      return () => {
        window.removeEventListener('keydown', toggleEditOnEscape);
      };
    }
  }, [toggleIsEditting, isEditting]);

  function handleRemoveTodo() {
    dispatch({ type: 'REMOVE_TODO', id: todo.id });
  }

  function handleToggleCompleted() {
    dispatch({ type: 'TOGGLE_COMPLETED', id: todo.id });
    if (isEditting) {
      toggleIsEditting();
    }
  }

  function handleSaveTask() {
    if (editTaskValue && editTaskValue !== todo.task) {
      dispatch({ type: 'EDIT_TODO', id: todo.id, task: editTaskValue });
    }
    toggleIsEditting();
  }

  function handleEditTaskSubmit(e) {
    e.preventDefault();
    handleSaveTask();
  }

  return (
    <TodoItem
      todoRef={todoRef}
      todo={todo}
      isEditting={isEditting}
      editTaskValue={editTaskValue}
      toggleIsEditting={toggleIsEditting}
      handleEditTaskSubmit={handleEditTaskSubmit}
      handleToggleCompleted={handleToggleCompleted}
      handleEditTaskValueChange={handleEditTaskValueChange}
      handleRemoveTodo={handleRemoveTodo}
      handleSaveTask={handleSaveTask}
    />
  );
}

TodoItemContainer.propTypes = {
  todo: PropTypes.object.isRequired
};

export default memo(TodoItemContainer);
