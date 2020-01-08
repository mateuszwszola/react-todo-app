import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { TodoListsDispatchContext } from '../../contexts/todoListsContext';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  IconButton
} from '@material-ui/core';
import { List as ListIcon } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
// import { makeStyles } from '@material-ui/core/styles';
import NavLink from './NavLink';

// const useStyles = makeStyles(theme => ({
//   capitalize: {
//     textTransform: 'capitalize'
//   }
// }));

function CustomListNavItem({ id, name, url, toggleDrawer }) {
  const dispatch = useContext(TodoListsDispatchContext);
  const history = useHistory();
  const location = useLocation();
  // const classes = useStyles();

  const { from } = location.state || { from: { pathname: '/' } };

  function handleRemoveList(e) {
    dispatch({ type: 'REMOVE_LIST', id });
    history.replace(from);
  }

  return (
    <ListItem>
      <NavLink to={url} onClick={toggleDrawer(false)}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
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
