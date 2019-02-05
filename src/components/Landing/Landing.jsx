import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import RedirectButton from '../RedirectButton/RedirectButton';
import Logo from '../../assets/CoachesCLASS.jpeg'

const useStyles = makeStyles(theme => ({
  centerAlign: {
    textAlign: 'center'
  },
  mainImg: {
    width: '100%',
    marginTop: theme.spacing.unit * 5
  },
  mainTextSpacing: {
    marginTop: theme.spacing.unit * 2
  },
  buttonSpacing: {
    marginTop: theme.spacing.unit
  }
}));

function Landing(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
          <Grid container justify="center">
            <Grid item>
              <img src={Logo} alt="BakeMark logo" className={classes.mainImg} />
            </Grid>
          </Grid>
          <Grid container className={classes.centerAlign} justify="center">
            <Grid item>
              <p className={classes.mainTextSpacing}>Welcome to CoachesC.L.A.S.S.</p>
              <RedirectButton onClick={props.clearInquiryForm} path="/katie" className={classes.buttonSpacing}>Go to Katie</RedirectButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Landing
