import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    padding: theme.spacing(5, 0),
    marginTop: 'auto',
    backgroundColor: theme.palette.background.paper
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          React Todo App With Hooks
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link href="https://github.com/mateuszwszola/react-todo-app">
            Source on GitHub
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
