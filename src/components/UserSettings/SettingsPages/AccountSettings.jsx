import React, { useState } from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  buttonMargin: {
    marginTop: theme.spacing.unit,
  },
}))

function AccountSettings(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <h2>Account Settings</h2>
        <TextField
          fullWidth
          label="First Name"
          value={values.firstName}
          onChange={handleChange('firstName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Last Name"
          value={values.lastName}
          onChange={handleChange('lastName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Email"
          value={values.email}
          onChange={handleChange('email')}
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

export default AccountSettings;
