import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoListsContext } from '../contexts/todoListsContext';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, List, Divider } from '@material-ui/core';
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

  const mainLists = todoLists.filter(list => list.role === 'main');
  const customLists = todoLists.filter(list => list.role === 'custom');

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
                <TodoListItem
                  key={list.id}
                  id={list.id}
                  name={list.name}
                  url={list.url}
                  role={list.role}
                  toggleDrawer={toggleDrawer}
                />
              ))}
            </List>
            <Divider />
            <List>
              {customLists.map(list => (
                <TodoListItem
                  key={list.id}
                  id={list.id}
                  name={list.name}
                  url={list.url}
                  role={list.role}
                  toggleDrawer={toggleDrawer}
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
