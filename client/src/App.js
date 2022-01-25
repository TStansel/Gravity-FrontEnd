import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import svg_1 from './images/svg-1.svg'
import Home from './pages';
import SigninPage from './pages/signin';
import AddToSlack from './pages/addtoslack';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

import useStyles from './styles';


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [])

  return (
  // <Router>
  //  <Routes>
  //    <Route path="/" element={<Home/>} />
  //    <Route path="/signin" element={<SigninPage/>} />
  //    <Route path="/addtoslack" element={<AddToSlack/>} />
  //  </Routes>
  // </Router>
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={svg_1} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
