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
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DeleteIcon from '@material-ui/icons/Delete';
import { firstLetterUpper } from '../helpers';
import { useHistory, useLocation } from 'react-router-dom';

const listIcons = {
  tasks: <AssignmentTurnedInIcon />,
  important: <StarIcon />,
  planned: <CalendarTodayIcon />,
  default: <ListIcon />
};

function TodoListItem({ id, name, url, role, toggleDrawer }) {
  const dispatch = useContext(TodoListsDispatchContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  function handleRemoveList(e) {
    // dispatch remove action
    dispatch({ type: 'REMOVE_LIST', listId: id });
    // toggleDrawer
    toggleDrawer(false)();
    // redirect to main page
    history.replace(from);
  }

  return (
    <ListItem>
      <NavLink to={url} onClick={toggleDrawer(false)}>
        <ListItemIcon>{listIcons[name] || listIcons.default}</ListItemIcon>
        <ListItemText primary={firstLetterUpper(name)} />
      </NavLink>
      {role === 'custom' && (
        <ListItemSecondaryAction>
          <IconButton onClick={handleRemoveList}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default TodoListItem;
