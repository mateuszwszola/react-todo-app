import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';
import { TodoListsContext } from '../../contexts/todoListsContext';
import AddNewList from '../AddNewList';
import Nav from './Nav';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
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
          <Nav
            mainLists={mainLists}
            customLists={customLists}
            toggleDrawer={toggleDrawer}
          />
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
