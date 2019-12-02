import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    height: '64px'
  }
}));

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="static" className={classes.appBar}>
      <Toolbar>
        <Typography color="inherit">TODOS WITH HOOKS</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
