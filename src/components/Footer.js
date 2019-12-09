import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">React Todo App With Hooks</Typography>
        <Typography variant="body2" color="textSecondary">
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
