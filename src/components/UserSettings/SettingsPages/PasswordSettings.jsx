import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  buttonMargin: {
    marginTop: theme.spacing.unit,
  },
}))

function PasswordSettings(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
    oldPassowrd: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <h2>Change Password</h2>
        <TextField
          fullWidth
          label="Old Password"
          value={values.oldPassowrd}
          onChange={handleChange('oldPassword')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="New Password"
          value={values.newPassword}
          onChange={handleChange('newPassword')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Confirm New Password"
          value={values.confirmPassword}
          onChange={handleChange('confirmPassword')}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" size="large" color="primary" className={classes.buttonMargin}>
          Save
        </Button>
      </Grid>
    </Grid>
  )
}

export default PasswordSettings;
