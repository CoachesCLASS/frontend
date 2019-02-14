import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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
function AppRouter(props) {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/UserSettings" component={UserSettings} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset" component={ResetPassword} />
          <Route path="/courses" component={CoursesDashboard} />
          <Route path="/UserDashboard" component={Dashboard} />
          <Route path="/CourseHome" component={CourseHome} />
          <Route path="/MyCourses" component={MyCourses} />
          <Route component={NotFound404Page} />
        </Switch>
      </Grid>
    </Grid>
  );
}

export default withRouter(AppRouter);
