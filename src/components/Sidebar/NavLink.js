import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  navLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(1, 0),
    color: 'inherit'
  }
}));

const NavLink = props => {
  const classes = useStyles();

  return <RouterNavLink {...props} className={classes.navLink} />;
};

export default NavLink;
