import React from "react";
import { Grid } from "@material-ui/core";
import "./calendarEventList.scss";
// import { useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import Paper from "@material-ui/core/Paper/Paper";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    courses: state.allCourses.courses,
    userId: state.userId.id,
  }
}

function CalendarEventList(props) {

  var calendarEvents = [];
  var date = new Date(props.date);
  var data = require("../../../assets/db.json"); // forward slashes will depend on the file location
  var courseObjects = data.courses;
  if(!props.courseName){
    var courses = Object.keys(props.checkedCourses).filter(course => {
      return props.checkedCourses[course] === true
    })
  
    courseObjects = courses.map(course => {
      return data.courses.find(x => x.title === course)
    })
  }

  for (var i = 0; i < courseObjects.length; i++) {
    var title = courseObjects[i].title;
    var assignments = courseObjects[i].assignments;
    for (var j = 0; j < assignments.length; j++) {
      var obj = assignments[j];
      var dueDate = new Date(obj.dueDate);
      if (dueDate.getTime() === date.getTime()) {
        if (props.courseName && props.courseName === obj.class) {
          calendarEvents.push(obj);
        }
        if (!props.courseName) {
          calendarEvents.push(obj);
        }
      }
    }
  }
  return (
    <>
      <Typography variant="h6" className="eventListTitle">
        Events on {props.date}:
      </Typography>

      <Grid container direction="column" className="eventList">
        {calendarEvents.map(event => (
          <Paper className="event" key={event.class + event.title}>
            <CalendarEvent
              type={event.type}
              className={event.class}
              title={event.title}
            />
          </Paper>
        ))}
      </Grid>
    </>
  );
}
export default connect(mapStateToProps)(CalendarEventList);
