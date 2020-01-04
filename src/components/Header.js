import React, { useState } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Menu as MenuIcon, Edit as EditIcon } from '@material-ui/icons';
import Sidebar from './Sidebar';
import HeaderListName from './HeaderListName';

const useStyles = makeStyles(theme => ({
  appBar: {
    height: '64px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  hide: {
    display: 'hide'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  editButton: {
    marginLeft: theme.spacing(2)
  }
}));

function Header(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <AppBar color="primary" position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            className={clsx(classes.menuButton, isOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <HeaderListName />

          <IconButton
            color="inherit"
            aria-label="edit todo list name"
            onClick={() => alert('edit todo list name')}
            className={classes.editButton}
          >
            <EditIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
