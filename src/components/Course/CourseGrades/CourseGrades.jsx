import React from "react";
import { Grid } from "@material-ui/core";
import "./courseGrades.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import { NavLink } from "react-router-dom";

function CourseGrades(props) {
  var grades = [];
  var data = require("../../../assets/grades.json");
  for (var i = 0; i < data.length; i++){
    if (data[i].user == props.match.params.userId){
      var courses = data[i].courses;
      for (var j = 0; j < courses.length; j++){
        var course = courses[j];
        if (course.title === props.match.params.courseName){
          var courseGrades = course.grades;
          for (var k = 0; k < courseGrades.length; k++){
            grades.push(courseGrades[k]);
          }
        }
      }
    }
  }
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

          <NavLink to="/CourseGrades" disabled className="navLinkActive">
            <Typography className="navtabActive" color="secondary">
              Grades
            </Typography>
          </NavLink>
        </Grid>

        <div className="scrollable">
          <Grid container direction="column" className="scrollable" wrap="wrap">
            <Grid item style={{ height: "46px" }}>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    Title
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    Score
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    Out of
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" style={{ color: "black" }}>
                    Comment
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          {grades.map(grade => (
              <Grid item style={{ marginTop: "0rem", height: "96px" }} key={grade.assignment}>
                <Grid container direction="row" spacing={4}>
                  <Grid item xs={4} >
                    <NavLink
                      to={"/CourseAssignments/" + props.match.params.courseName + "/" + props.match.params.userId + "/" + grade.assignment}
                      className="navLink"
                    >
                      <Typography variant="caption" style={{ color: "grey" }}>
                          {grade.assignment}
                      </Typography>
                    </NavLink>
                  </Grid>
                  <Grid item xs={2} >
                    <Typography variant="caption" style={{ color: "grey" }}>
                            {grade.score}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} >
                    <Typography variant="caption" style={{ color: "grey" }}>
                            {grade.outOf}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} wrap="wrap" >
                    <Typography variant="caption" style={{ color: "grey" }}>
                      {grade.comment}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
          ))}
          </Grid>

        </div>
      </div>
    </>
  );
}
// alignItems="center"

export default CourseGrades;
