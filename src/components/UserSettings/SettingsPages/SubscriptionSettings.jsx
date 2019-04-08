import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
}))

function SubscriptionSettings(props) {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <h2>Subscription Settings</h2>
        <p>Your current subscription expires on: 1/23/2020</p>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Extend Subscription
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Cancel Subscription
        </Button>
      </Grid>
    </Grid>
  )
}

export default SubscriptionSettings;
