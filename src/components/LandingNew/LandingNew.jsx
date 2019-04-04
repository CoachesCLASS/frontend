import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import Logo from "../../assets/CC Logo.png";
import { Link } from 'react-router-dom'
import RedirectButton from '../RedirectButton/RedirectButton';

const useStyles = makeStyles(theme => ({
  buttonMargin: {
    marginTop: theme.spacing.unit,
  },
  mainContent: {
    textAlign: 'center',
  },
  ccLogo: {
    margin: '3rem'
  }
}))

function LandingNew(props) {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={4} />
      <Grid item xs={4} className={classes.mainContent}>
        <h1>Welcome to Coaches C.L.A.S.S.</h1>
        <img src={Logo} alt="Coaches Class" width={300} className={classes.ccLogo}/>
        <RedirectButton path="/login">Get Started2</RedirectButton>
      </Grid>
    </Grid>
  )
}

export default LandingNew;
