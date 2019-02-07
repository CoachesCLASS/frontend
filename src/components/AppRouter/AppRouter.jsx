import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NotFound404Page from "../NotFound404Page/NotFound404Page";
import { Grid } from "@material-ui/core";
import Landing from "../Landing/Landing";
import Katie from "../Katie/Katie";
import Dashboard from "../UserDashboard/Dashboard";
function AppRouter(props) {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/katie" component={Katie} />
          <Route path="/UserDashboard" component={Dashboard} />
          <Route component={NotFound404Page} />
        </Switch>
      </Grid>
    </Grid>
  );
}

export default withRouter(AppRouter);
