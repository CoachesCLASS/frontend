import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import NotFound404Page from '../NotFound404Page/NotFound404Page';
import { Grid } from '@material-ui/core';
import Landing from '../Landing/Landing';
import Katie from '../Katie/Katie';

function AppRouter(props) {

  return (
    <Grid container justify="center">
      <Grid item>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/katie" component={Katie} />
          <Route component={NotFound404Page} />
        </Switch>
      </Grid>

    </Grid>
  );
}

export default withRouter(AppRouter);
