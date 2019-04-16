import React from "react";
import { Grid } from "@material-ui/core";
import "./courseAnnouncements.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
function CourseAnnouncements(props) {
  return (
    <>
      <div className="wrapper">
        <Grid container alignItems="center" className="courseDetails">
          <Avatar />
          <Grid container style={{ paddingTop: 5 }} justify="center">
            <Typography component="h6">
              {" "}
              {props.match.params.courseName}
            </Typography>
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
          <NavLink
            to={"/CourseHome/" + props.match.params.courseName}
            className="navLink"
          >
            <Typography className="navtab">Home > </Typography>
          </NavLink>

          <NavLink to="/CourseAnnouncements" className="navLinkActive">
            <Typography className="navtabActive" color="secondary">
              Announcements
            </Typography>
          </NavLink>
        </Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className="courseAnnouncement" elevation={1}>
              <Typography variant="h5" component="h3">
                Test tomorrow
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
          <Grid item style={{ marginTop: "1rem" }}>
            <Paper className="courseAnnouncement" elevation={1}>
              <Typography variant="h5" component="h3">
                Group project coming up!!
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
// alignItems="center"

export default CourseAnnouncements;
