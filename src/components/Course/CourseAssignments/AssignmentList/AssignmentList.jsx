import React from "react";
import { Grid } from "@material-ui/core";
import "./assignmentList.scss";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    courses: state.allCourses.courses,
    userId: state.userId.id,
  }
}
function AssignmentList(props) {

  var assignments = [];
  var date = new Date();
  
  var data = require("../../../../assets/db.json"); // forward slashes will depend on the file location
  for (var i = 0; i < data.courses.length; i++){
    if (data.courses[i].title === props.courseName){
      var courseAssignments = data.courses[i].assignments;
      for (var j = 0; j < courseAssignments.length; j++) {
        var obj = courseAssignments[j];
        var dueDate = new Date(obj.dueDate);
        if (props.title==="Upcoming" && (date.getTime() <= dueDate.getTime()) ) {
          assignments.push(obj);
        }
        if (props.title==="Past" && (date.getTime() > dueDate.getTime()) ) {
          assignments.push(obj);
        }
      }
    }
  }

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
              <Grid item xs={7}>
                <Typography variant="subtitle2" color="inherit">
                  Title
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2" color="inherit">
                  Due Date
                </Typography>
              </Grid>
              <Grid item xs={2}>
                {props.title === "Past" && (
                  <Typography variant="subtitle2" color="inherit">
                    Score
                  </Typography>
                )}
              </Grid>
            </Grid>
          </li>
            {assignments.map(assignment => (
              <li>
                <Grid container xs={12} className="courseEntry">
                  <Grid item xs={7}>
                  <NavLink
                    to={"/CourseAssignments/" + props.courseName + "/" +  assignment.title}
                    className="navLink"
                  >
                    <Typography variant="body2" color="inherit">
                      {assignment.title}
                    </Typography>
                  </NavLink>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body2" color="inherit">
                      {assignment.dueDate.substring(0,15)}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    {props.title === "Past" && (
                      <Typography variant="body2" color="inherit">
                        {assignment.points}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </li>
            )
            )}


        </ul>
      </Paper>
    </>
  );
}

export default connect(mapStateToProps)(AssignmentList);
