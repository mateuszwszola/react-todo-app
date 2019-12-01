import React, { useContext } from 'react';
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
import { TodosContext } from '../contexts/todosContext';

function TodoItem({ todo }) {
  const { removeTodo, toggleCompleted, editTodo } = useContext(TodosContext);
  const [isEditting, toggleIsEditting] = useToggleState(false);
  const [editTaskValue, handleEditTaskValueChange] = useInputState(todo.task);

  function handleRemoveTodo() {
    removeTodo(todo.id);
  }

  function handleToggleCompleted() {
    toggleCompleted(todo.id);
    if (isEditting) {
      toggleIsEditting();
    }
  }

  function handleSaveTask() {
    if (editTaskValue && editTaskValue !== todo.task) {
      editTodo(todo.id, editTaskValue);
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

export default TodoItem;
