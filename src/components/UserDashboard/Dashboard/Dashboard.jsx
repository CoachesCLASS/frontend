import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./dashboard.scss";
import CoursesGrid from "./CoursesGrid/CoursesGrid";
import NotificationPanel from "./NotificationPanel/NotificationPanel";
import {connect} from 'react-redux'
import { SET_COURSES } from '../../../store/actionTypes';

const mapStateToProps = (state) => {
  return {
    instructor: state.instructor.isInstructor,
    userId: state.userId.id,
    courses: state.allCourses.courses,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCourses: (courses) => {
      dispatch({
        type: SET_COURSES,
        courses,
      })
    },
  }
}
function Dashboard(props) {
  var userData = require("../../../assets/users.json");
  var courses;
  for (var i = 0; i < userData.length; i++) {
    if( userData[i].id === props.userId){
      courses = userData[i].courses;
    }
  }
  props.setCourses(courses);
  return (
    <>
      <Grid container className="contentContainer">
        <Grid item xs={9}>
          <CoursesGrid userId={props.userId}/>
        </Grid>
        {
          !props.instructor && (
            <Grid item xs={3}>
              <NotificationPanel userId={props.userId}/>
            </Grid>
          )
        }
      </Grid>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
