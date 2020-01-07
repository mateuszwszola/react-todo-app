import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';
import image from '../img/desk-background.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    padding: 0,
    margin: 0,
    backgroundImage: `url(${image})`, // Photo by Dustin Lee on Unsplash
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  main: {
    padding: 0,
    height: '100%'
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
