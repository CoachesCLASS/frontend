import React from "react";
import { Grid } from "@material-ui/core";
import "./coursesList.scss";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    userId: state.userId.id,
    courses: state.allCourses.courses,
  }
}
function CourseList(props) {
  var data = require("../../../assets/db.json"); 
  var courseObjects;
  if (props.title === "Previous Courses"){
    courseObjects = [];
  }
  else {
    courseObjects = props.courses.map(course => {
      return data.courses.find(x => x.title === course)
    })
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
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="inherit">
                  Course Name
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="inherit">
                  Instructor
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="inherit">
                  Term
                </Typography>
              </Grid>
            </Grid>
          </li>
          <li>
            {courseObjects.map(event=>(
              <Grid container xs={12} className="courseEntry">
                <Grid item xs={4}>
                  <Typography variant="body2" color="inherit">
                    {event.title}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="inherit">
                    {event.instructor}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="inherit">
                    {event.term}
                  </Typography>
                </Grid>
              </Grid>  
            ))}
          </li>
        </ul>
      </Paper>
    </>
  );
}

export default connect(mapStateToProps)(CourseList);
