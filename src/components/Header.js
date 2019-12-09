import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar';
import clsx from 'clsx';

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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            className={clsx(classes.menuButton, isOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" component="h2" variant="h5">
            Tasks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
