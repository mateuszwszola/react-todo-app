import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    padding: 0,
    margin: 0
  },
  main: {
    padding: 0
  }
}));

function PageContent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <Container component="main" className={classes.main}>
        {props.children}
      </Container>

      <Footer />
    </div>
  );
}

export default PageContent;
