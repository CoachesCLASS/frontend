import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import NotFound404Page from "../NotFound404Page/NotFound404Page";
import { Grid } from "@material-ui/core";
import Landing from "../Landing/Landing";
import UserSettings from "../UserSettings/UserSettings";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ResetPassword from "../ResetPassword/ResetPassword";
import CoursesDashboard from "../Courses/CoursesDashboard";
import Dashboard from "../UserDashboard/Dashboard/Dashboard";
import MyCourses from "../MyCourses/MyCourses";
import CourseHome from "../Course/CourseHome/CourseHome";
import UserCalendar from "../UserCalendar/UserCalendar";
import CourseAnnouncements from "../Course/CourseAnnouncements/CourseAnnouncements";
import CourseFiles from "../Course/CourseFiles/CourseFiles";
import CourseGrades from "../Course/CourseGrades/CourseGrades";
import CourseAssignments from "../Course/CourseAssignments/CourseAssignments";
import Assignment from "../Course/CourseAssignments/Assignment/Assignment";
import SimpleAppBar from "../SimpleAppBar/SimpleAppBar";
import { makeStyles } from '@material-ui/styles'
import LandingNew from "../LandingNew/LandingNew";
import LandingAppBar from "../LandingNew/LandingAppBar";

const useStyles = makeStyles(theme => ({
  containerSpacing: {
    padding: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      paddingTop: '72px',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '80px',
    },
  },
}));

function AppRouter(props) {
  const classes = useStyles()
  return (
    <>
      {
        props.location.pathname === "/" ? (
          <LandingAppBar/>
        ) : ["/old", "/reset", "/login", "/register"].includes(props.location.pathname) ? (
          <></>
        ): (
          <SimpleAppBar/>      
        )
      }
      <Grid container justify="center" className={classes.containerSpacing}>
        <Grid item xs={12}>
          <Switch>
            <Redirect exact from="/UserSettings" to={{ pathname: "/UserSettings/account", state: props.location.state }}/>
            <Route path="/" exact component={LandingNew} />
            <Route path="/old" exact component={Landing} />
            <Route path="/UserSettings" component={UserSettings} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/reset" component={ResetPassword} />
            <Route path="/courses" component={CoursesDashboard} />
            <Route path="/UserDashboard" component={Dashboard} />
            <Route path="/CourseHome/:courseName" component={CourseHome} />
            <Route path="/MyCourses" component={MyCourses} />
            <Route path="/UserCalendar" component={UserCalendar} />
            <Route
              path="/CourseAnnouncements/:courseName"
              component={CourseAnnouncements}
            />
            <Route path="/CourseFiles/:courseName" component={CourseFiles} />
            <Route path="/CourseGrades/:courseName" component={CourseGrades} />
            <Route
              path="/CourseAssignments/:courseName/:assignmentName"
              component={Assignment}
            />
            <Route
              path="/CourseAssignments/:courseName"
              component={CourseAssignments}
            />
            <Route component={NotFound404Page} />
          </Switch>
        </Grid>
      </Grid>
    </>
  );
}

export default withRouter(AppRouter);
