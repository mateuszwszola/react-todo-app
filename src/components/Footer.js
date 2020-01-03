import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(
  theme =>
    console.log(theme.palette) || {
      footer: {
        width: '100%',
        padding: theme.spacing(1, 0),
        marginTop: 'auto',
        backgroundColor: theme.palette.background.paper
      },
      link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
          marginTop: 0
        }
      },
      icon: {
        color: theme.palette.common.black,
        marginRight: theme.spacing(1)
      },
      flex: {
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }
      }
    }
);

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.flex}>
        <Typography variant="h6" align="center">
          React Todo App
        </Typography>

        <Typography variant="body2" color="textSecondary" align="center">
          <Link
            href="https://github.com/mateuszwszola/react-todo-app"
            className={classes.link}
            target="_blank"
          >
            <GitHubIcon className={classes.icon} />
            Source on GitHub
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
