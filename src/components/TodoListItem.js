import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoListsDispatchContext } from '../contexts/todoListsContext';
import NavLink from './NavLink';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  IconButton
} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoListItem({ id, name, url }) {
  const dispatch = useContext(TodoListsDispatchContext);

  return (
    <ListItem>
      <NavLink to={url}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </NavLink>
      <ListItemSecondaryAction>
        <IconButton
          onClick={e => dispatch({ type: 'REMOVE_LIST', listId: id })}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default TodoListItem;
