import React from "react";
import { Grid } from "@material-ui/core";
import "./courseAssignments.scss";
import SimpleAppBar from "../../SimpleAppBar/SimpleAppBar";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";

function CourseAssignments(props) {
  return (
    <>
      <SimpleAppBar title="Coaches C.L.A.S.S." value={2} />
      <div className="wrapper">
        <Grid container alignItems="center" className="courseDetails">
          <Avatar />
          <Grid container style={{ paddingTop: 5 }} justify="center">
            <Typography component="h6"> Entrepreneurship 101</Typography>
          </Grid>
          <Grid container style={{ paddingBottom: 15 }} justify="center">
            <Typography component="h6"> Bert Robinson</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          className="courseTabs"
        >
          <NavLink to="/CourseHome" className="navLink">
            <Typography className="navtab">Home > </Typography>
          </NavLink>

          <NavLink to="/CourseAssignments" className="navLinkActive">
            <Typography className="navtabActive" color="secondary">
              Assignments
            </Typography>
          </NavLink>
        </Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className="courseAnnouncement" elevation={1}>
              <Typography variant="h5" component="h3">
                COURSE ASSIGNMENTS
              </Typography>
              <Typography component="p" style={{ color: "grey" }}>
                2/21/19
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your
                application.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CourseAssignments;