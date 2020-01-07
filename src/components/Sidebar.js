import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, List, Divider } from '@material-ui/core';
import { TodoListsContext } from '../contexts/todoListsContext';
import AddNewList from './AddNewList';
import CustomListSidebarItem from './CustomListSidebarItem';
import MainListSidebarItem from './MainListSidebarItem';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  list: {
    width: '100%',
    marginTop: theme.spacing(1)
  }
}));

function Sidebar({ isOpen, toggleDrawer }) {
  const todoLists = useContext(TodoListsContext);
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);

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
                <MainListSidebarItem
                  key={list.id}
                  name={list.name}
                  url={list.url}
                  toggleDrawer={toggleDrawer}
                />
              ))}
            </List>
            <Divider />
            <List className={classes.scrolledList}>
              {customLists.map(list => (
                <CustomListSidebarItem
                  key={list.id}
                  id={list.id}
                  name={list.name}
                  url={list.url}
                  role={list.role}
                  toggleDrawer={toggleDrawer}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                />
              ))}
            </List>
          </nav>
          <AddNewList isEdit={isEdit} setIsEdit={setIsEdit} />
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
