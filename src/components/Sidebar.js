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
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  list: {
    width: 250,
    marginTop: theme.spacing(2)
  },
  formContainer: {
    padding: theme.spacing(2)
  }
}));

function Sidebar({ isOpen, toggleDrawer }) {
  const classes = useStyles();

  const mainLists = [
    {
      text: 'Tasks',
      icon: <AssignmentTurnedInIcon />
    },
    {
      text: 'Important',
      icon: <StarIcon />
    },
    {
      text: 'Planned',
      icon: <CalendarTodayIcon />
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
        <div className={classes.container}>
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
          <div className={classes.formContainer}>
            <IconButton>
              <AddIcon />
            </IconButton>
            <Typography
              style={{ marginLeft: '8px' }}
              component="span"
              variant="subtitle1"
              color="textSecondary"
            >
              New list
            </Typography>
          </div>
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
