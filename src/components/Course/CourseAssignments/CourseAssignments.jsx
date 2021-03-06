import React from "react";
import { Grid } from "@material-ui/core";
import "./courseAssignments.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import { NavLink } from "react-router-dom";
import AssignmentList from "./AssignmentList/AssignmentList";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    courses: state.allCourses.courses,
    userId: state.userId.id,
  }
}
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
            to={"/CourseHome/" + props.match.params.courseName}
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
            <AssignmentList title="Upcoming" courseName = {props.match.params.courseName} />
          </Grid>
          <Grid item>
            <AssignmentList title="Past" courseName = {props.match.params.courseName}  />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(CourseAssignments);
