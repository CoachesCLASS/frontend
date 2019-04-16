import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  rightAlign: {
    marginLeft: 'auto',
  },
}))

function LandingAppBar(props) {
  const classes = useStyles()

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button component={Link} to="/login" color="inherit" className={classes.rightAlign}>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default LandingAppBar;
