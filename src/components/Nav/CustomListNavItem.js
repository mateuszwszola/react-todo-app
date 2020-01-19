import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  IconButton
} from '@material-ui/core';
import { List as ListIcon } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { TodosDispatchContext } from '../../contexts/todosContext';
import { TodoListsDispatchContext } from '../../contexts/todoListsContext';
import NavLink from './NavLink';

const useStyles = makeStyles(theme => ({
  capitalize: {
    textTransform: 'capitalize'
  }
}));

function CustomListNavItem({ id, name, url, toggleDrawer }) {
  const todoListsDispatch = useContext(TodoListsDispatchContext);
  const todosDispatch = useContext(TodosDispatchContext);
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const { from } = location.state || { from: { pathname: '/' } };

  function handleRemoveList(e) {
    todosDispatch({ type: 'REMOVE_LIST', id });
    todoListsDispatch({ type: 'REMOVE_LIST', id });
    history.replace(from);
  }

  return (
    <ListItem>
      <NavLink to={url} onClick={toggleDrawer(false)}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary={name} className={classes.capitalize} />
      </NavLink>
      <ListItemSecondaryAction>
        <IconButton onClick={handleRemoveList}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

CustomListNavItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default CustomListNavItem;
