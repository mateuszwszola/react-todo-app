import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';
import ListIcon from '@material-ui/icons/List';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  }
}));

function Sidebar({ isOpen, toggleDrawer }) {
  const classes = useStyles();

  const mainLists = [
    {
      text: 'Important',
      icon: <StarIcon />
    },
    {
      text: 'Planned',
      icon: <CalendarTodayIcon />
    },
    {
      text: 'Tasks',
      icon: <AssignmentTurnedInIcon />
    }
  ];

  const userLists = ['Work', 'Private', 'Groceries'];

  return (
    <div>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={true}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {mainLists.map(item => (
              <ListItem button key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {userLists.map(text => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
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
