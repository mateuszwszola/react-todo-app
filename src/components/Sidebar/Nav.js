import React from 'react';
import PropTypes from 'prop-types';
import { List, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MainListNavItem from './MainListNavItem';
import CustomListNavItem from './CustomListNavItem';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    marginTop: theme.spacing(1)
  }
}));

function Nav({ mainLists, customLists, toggleDrawer }) {
  const classes = useStyles();

  return (
    <nav
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {mainLists.map(list => (
          <MainListNavItem
            key={list.id}
            name={list.name}
            url={list.url}
            toggleDrawer={toggleDrawer}
          />
        ))}
      </List>
      <Divider />
      <List>
        {customLists.map(list => (
          <CustomListNavItem
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
  );
}

Nav.propTypes = {
  mainLists: PropTypes.array.isRequired,
  customLists: PropTypes.array.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default Nav;
