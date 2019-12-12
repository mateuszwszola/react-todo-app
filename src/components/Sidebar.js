import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoListsContext } from '../contexts/todoListsContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NavLink from './NavLink';
import AddNewList from './AddNewList';
import TodoListItem from './TodoListItem';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  list: {
    width: 250,
    marginTop: theme.spacing(2)
  }
}));

function Sidebar({ isOpen, toggleDrawer }) {
  const todoLists = useContext(TodoListsContext);
  const classes = useStyles();

  const mainLists = [
    {
      id: '1',
      text: 'Tasks',
      icon: <AssignmentTurnedInIcon />,
      url: '/'
    },
    {
      id: '2',
      text: 'Important',
      icon: <StarIcon />,
      url: '/important'
    },
    {
      id: '3',
      text: 'Planned',
      icon: <CalendarTodayIcon />,
      url: '/planned'
    }
  ];

  return (
    <div>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={true}
      >
        <div className={classes.container}>
          <nav
            className={classes.list}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {mainLists.map(list => (
                <ListItem key={list.id}>
                  <NavLink to={list.url} onClick={toggleDrawer(false)}>
                    <ListItemIcon>{list.icon}</ListItemIcon>
                    <ListItemText primary={list.text} />
                  </NavLink>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {todoLists.map(list => (
                <TodoListItem
                  toggleDrawer={toggleDrawer}
                  key={list.id}
                  id={list.id}
                  name={list.name}
                  url={list.url}
                />
              ))}
            </List>
          </nav>
          <AddNewList />
        </div>
      </SwipeableDrawer>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default Sidebar;
