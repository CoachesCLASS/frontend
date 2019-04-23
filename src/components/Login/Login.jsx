import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Switch } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Logo from '../../assets/CoachesCLASS_small.jpeg'
import RedirectButton from '../RedirectButton/RedirectButton';
import users from '../../assets/users.json';
import { SET_INSTRUCTOR, SET_ID } from '../../store/actionTypes';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
}));

const mapStateToProps = (state) => {
  return {
    instructor: state.instructor.isInstructor,
    id: state.userId.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsInstructor: (isInstructor) => {
      dispatch({
        type: SET_INSTRUCTOR,
        isInstructor,
      })
    },
    setId: (id) => {
      dispatch({
        type: SET_ID,
        id,
      })
    },
  }
}


function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  function submit()
  {
    console.log(email, password)

     for(var u = 0; u < users.length; u++)
     {
       console.log(users[u].email, users[u].password)
        if(email === users[u].email && password === users[u].password) 
        {
          console.log(true)
          props.setId(users[u].id)
          return { newPath: "/UserDashboard" }
        }
     }
     console.log(false)
     return { newPath: "/login" }
     
  }
  
  const onEmailChange = event => {
    setEmail(event.target.value)
  }
  
  const onPasswordChange = event => {
    setPassword(event.target.value)
  }
  
  const handleChange = event => {
    props.setIsInstructor(event.target.checked)
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img id="dtImage" className="desktop-logo" src={Logo} alt="Coaches Class"/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus value={email} onChange={onEmailChange}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" value={password} onChange={onPasswordChange}/>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <FormControlLabel
            control={
              <Switch checked={props.instructor} onChange={handleChange} />
            }
            label="Instructor"
          />
          <p><RedirectButton className="buttonSpacing" onClick={submit}>Sign in</RedirectButton></p>
          <p><RedirectButton path="/reset" className="buttonSpacing">Reset Password</RedirectButton></p>
          <p><RedirectButton path="/register" className="buttonSpacing">Register</RedirectButton></p>
          <p><RedirectButton path="/" className="buttonSpacing">Home</RedirectButton></p>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
