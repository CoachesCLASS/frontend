import React from "react";
import { Grid } from "@material-ui/core";
import "./courseAssignments.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import { NavLink } from "react-router-dom";
import AssignmentList from "./AssignmentList/AssignmentList";

function CourseAssignments(props) {

  return (
    <>
      <div className="wrapper">
        <Grid container alignItems="center" className="courseDetails">
          <Avatar />
          <Grid container style={{ paddingTop: 5 }} justify="center">
            <Typography component="h6">
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
            to={"/CourseHome/" + props.match.params.courseName + "/" + props.match.params.userId}
            className="navLink"
          >
            <Typography className="navtab">Home > </Typography>
          </NavLink>

          <NavLink to="/CourseAssignments" className="navLinkActive">
            <Typography className="navtabActive" color="secondary">
              Assignments
            </Typography>
          </NavLink>
        </Grid>
        <Grid
          container
          direction="column"
          spacing={2}
          className="assignmentContainer"
        >
          <Grid item>
            <AssignmentList title="Upcoming" courseName = {props.match.params.courseName} userId = { props.match.params.userId} />
          </Grid>
          <Grid item>
            <AssignmentList title="Past" courseName = {props.match.params.courseName} userId = { props.match.params.userId} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CourseAssignments;
