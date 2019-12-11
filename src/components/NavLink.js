import React from 'react';
import { Link } from '@reach/router';
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

  return (
    <Link
      {...props}
      className={classes.navLink}
      getProps={({ isCurrent }) => {
        return {
          style: {
            fontWeight: isCurrent ? 'bold' : 'normal'
          }
        };
      }}
    />
  );
};

export default NavLink;
