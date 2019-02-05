import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import NotFound404Page from '../NotFound404Page/NotFound404Page';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Landing from '../Landing/Landing';
import Katie from '../Katie/Katie';

const useStyles = makeStyles(theme => ({
  // containerSpacing: {
  //   padding: theme.spacing.unit,
  //   [theme.breakpoints.down('xs')]: {
  //     paddingTop: '56px',
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     paddingTop: '64px',
  //   }
  // },
}));

function AppRouter(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item className={classes.containerSpacing}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/katie" component={Katie} />
          {/* <Route path="/chris" component={Chris} />
          <Route path="/natalie" component={Natalie} />
          <Route path="/johnathan" component={Johnathan} /> */}
          <Route component={NotFound404Page} />
        </Switch>
      </Grid>

    </Grid>
  );
}

export default withRouter(AppRouter);
