import React from "react";
import { Grid } from "@material-ui/core";
import "./assignmentList.scss";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { NavLink } from "react-router-dom";
function AssignmentList(props) {
  return (
    <>
      <Paper className="listContainer">
        <Typography variant="h6" color="inherit" className="listTitle">
          {props.title}
        </Typography>
        <hr className="line" />
        <ul className="list">
          <li>
            <Grid container xs={12} className="courseEntry">
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="inherit">
                  Title
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="inherit">
                  Due Date
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {props.title === "Past" && (
                  <Typography variant="subtitle2" color="inherit">
                    Score
                  </Typography>
                )}
              </Grid>
            </Grid>
          </li>
          <li>
            <Grid container xs={12} className="courseEntry">
            
              <Grid item xs={4}>
              <NavLink
                to={"/CourseAssignments/" + props.courseName + "/Homework 1"}
                className="navLink"
              >
                <Typography variant="body2" color="inherit">
                  Homework#1
                </Typography>
                </NavLink>
              </Grid>
              <Grid item xs={4}>
              <NavLink
                to={"/CourseAssignments/" + props.courseName + "/Homework 1"}
                className="navLink"
              >
                <Typography variant="body2" color="inherit">
                  2/12/19
                </Typography>
                </NavLink>
              </Grid>
              <Grid item xs={4}>
              <NavLink
                to={"/CourseAssignments/" + props.courseName + "/Homework 1"}
                className="navLink"
              >
                {props.title === "Past" && (
                  <Typography variant="body2" color="inherit">
                    10/10
                  </Typography>
                )}
                </NavLink>
              </Grid>

            </Grid>
          </li>
          <li>
            <Grid container xs={12} className="courseEntry">
              <Grid item xs={4}>
              <NavLink
                to={"/CourseAssignments/" + props.courseName + "/Project Proposal"}
                className="navLink"
              >
                <Typography variant="body2" color="inherit">
                  Project Proposal
                </Typography>
              </NavLink>
              </Grid>
              <Grid item xs={4}>
              <NavLink
                to={"/CourseAssignments/" + props.courseName + "/Project Proposal"}
                className="navLink"
              >
                <Typography variant="body2" color="inherit">
                  2/17/19
                </Typography>
                </NavLink>
              </Grid>
              <Grid item xs={4}>
              <NavLink
                to={"/CourseAssignments/" + props.courseName + "/Project Proposal"}
                className="navLink"
              >
                {props.title === "Past" && (
                  <Typography variant="body2" color="inherit">
                    10/10
                  </Typography>
                )}
                </NavLink>
              </Grid>
            </Grid>
          </li>
        </ul>
      </Paper>
    </>
  );
}

export default AssignmentList;
