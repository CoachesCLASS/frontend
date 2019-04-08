import React from "react";
import { Grid } from "@material-ui/core";
import "./courseGrades.scss";
import SimpleAppBar from "../../SimpleAppBar/SimpleAppBar";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import { NavLink } from "react-router-dom";

function CourseGrades(props) {
  return (
    <>
      <SimpleAppBar title="Coaches C.L.A.S.S." value={2} />
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

          <NavLink to="/CourseGrades" disabled className="navLinkActive">
            <Typography className="navtabActive" color="secondary">
              Grades
            </Typography>
          </NavLink>
        </Grid>

        <div className="scrollable">
          <Grid container direction="column" className="scrollable">
            <Grid item style={{ height: "46px" }}>
              <Grid container direction="row" xs={12}>
                <Grid item xs="4">
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    Title
                  </Typography>
                </Grid>
                <Grid item xs="4">
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    Due Date
                  </Typography>
                </Grid>
                <Grid item xs="2">
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    Score
                  </Typography>
                </Grid>
                <Grid item xs="2">
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    Out of
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "0rem", height: "46px" }}>
              <Grid container direction="row" xs={12}>
                <Grid item xs="4">
                  <NavLink
                  to={"/CourseAssignments/" + props.match.params.courseName + "/Homework #1"}
                  className="navLink"
                  >
                  <Typography variant="p" style={{ color: "grey" }}>
                    Homework #1
                  </Typography>
                  </NavLink>
                </Grid>
                <Grid item xs="4">
                  <Typography variant="p" style={{ color: "grey" }}>
                    2/21/19
                  </Typography>
                </Grid>
                <Grid item xs="2">
                  <Typography variant="p" style={{ color: "grey" }}>
                    10
                  </Typography>
                </Grid>
                <Grid item xs="2">
                  <Typography variant="p" style={{ color: "grey" }}>
                    10
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "10px", height: "46px" }}>
              <Grid container direction="row" xs={12}>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    Homework #2
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    2/21/19
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    10
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    10
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "10px", height: "46px" }}>
              <Grid container direction="row" height="46px" xs={12}>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    Project Proposal
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    2/20/19
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    20
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    20
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "10px", height: "46px" }}>
              <Grid container direction="row" xs={12}>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    Wireframes
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    2/19/19
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    50
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    50
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "10px", height: "46px" }}>
              <Grid container direction="row" xs={12}>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    Quiz #1
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    2/15/19
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    100
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    100
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "10px", height: "46px" }}>
              <Grid container direction="row" xs={12}>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    Exam1
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    2/25/19
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    100
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" style={{ color: "grey" }}>
                    100
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
// alignItems="center"

export default CourseGrades;
