import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { makeStyles } from '@material-ui/core/styles';
import NavLink from './NavLink';

const useStyles = makeStyles(theme => ({
  capitalize: {
    textTransform: 'capitalize'
  }
}));

const listIcons = {
  tasks: <AssignmentTurnedInIcon />,
  important: <StarIcon />,
  planned: <CalendarTodayIcon />,
  default: <ListIcon />
};

function MainListSidebarItem({ name, url, toggleDrawer }) {
  const classes = useStyles();

  return (
    <ListItem>
      <NavLink to={url} onClick={toggleDrawer(false)}>
        <ListItemIcon>{listIcons[name] || listIcons.default}</ListItemIcon>
        <ListItemText className={classes.capitalize} primary={name} />
      </NavLink>
    </ListItem>
  );
}

MainListSidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default MainListSidebarItem;
