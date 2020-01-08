import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { TodoListsDispatchContext } from '../contexts/todoListsContext';
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
import NavLink from './NavLink';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  capitalize: {
    textTransform: 'capitalize'
  }
}));

const listIcons = {
  tasks: <AssignmentTurnedInIcon />,
  important: <StarIcon />,
  planned: <CalendarTodayIcon />,
  default: <ListIcon />
};

function ListNavItem({ id, name, url, role, toggleDrawer, isEdit, setIsEdit }) {
  const dispatch = useContext(TodoListsDispatchContext);
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const { from } = location.state || { from: { pathname: '/' } };

  function handleRemoveList(e) {
    dispatch({ type: 'REMOVE_LIST', listId: id });
    toggleDrawer(false)();
    history.replace(from);
  }

  return (
    <ListItem>
      <NavLink to={url}>
        <ListItemIcon>{listIcons[name] || listIcons.default}</ListItemIcon>
        {isEdit ? (
          <input type="text" />
        ) : (
          <ListItemText
            className={classes.capitalize}
            primary={name}
            onClick={() => role === 'custom' && setIsEdit(true)}
          />
        )}
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

ListNavItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default ListNavItem;
