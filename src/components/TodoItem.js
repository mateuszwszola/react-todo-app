import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import useInputState from '../hooks/useInputState';
import useToggleState from '../hooks/useToggleState';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Done as DoneIcon
} from '@material-ui/icons';
import { ListItemSecondaryAction } from '@material-ui/core';
import { TodosDispatchContext } from '../contexts/todosContext';

function TodoItem({ todo }) {
  const dispatch = useContext(TodosDispatchContext);
  const [isEditting, toggleIsEditting] = useToggleState(false);
  const [editTaskValue, handleEditTaskValueChange] = useInputState(todo.task);

  function handleRemoveTodo() {
    dispatch({ type: 'REMOVE_TODO', todoId: todo.id });
  }

  function handleToggleCompleted() {
    dispatch({ type: 'TOGGLE_COMPLETED', todoId: todo.id });
    if (isEditting) {
      toggleIsEditting();
    }
  }

  function handleSaveTask() {
    if (editTaskValue && editTaskValue !== todo.task) {
      dispatch({ type: 'EDIT_TODO', todoId: todo.id, newTask: editTaskValue });
    }
    toggleIsEditting();
  }

  function handleEditTaskSubmit(e) {
    e.preventDefault();
    handleSaveTask();
  }

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditting ? (
        <form onSubmit={handleEditTaskSubmit}>
          <TextField
            label="Edit task"
            value={editTaskValue}
            onChange={handleEditTaskValueChange}
            autoFocus
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
            onClick={toggleIsEditting}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.task}
          </ListItemText>
        </>
      )}
      <ListItemSecondaryAction>
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
  todo: PropTypes.object.isRequired
};

export default memo(TodoItem);
