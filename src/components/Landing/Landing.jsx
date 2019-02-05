import React from 'react';
import { Grid } from '@material-ui/core';
import RedirectButton from '../RedirectButton/RedirectButton';
import Logo from '../../assets/CoachesCLASS.jpeg'

function Landing(props) {

  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
          <Grid container justify="center">
            <Grid item>
              <img src={Logo} alt="CoachesC.L.A.S.S. logo" className="mainImg" />
            </Grid>
          </Grid>
          <Grid container className="centerAlign" justify="center">
            <Grid item>
              <p className="mainTextSpacing">Welcome to CoachesC.L.A.S.S.</p>
              <RedirectButton path="/katie" className="buttonSpacing">Go to Katie</RedirectButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Landing
