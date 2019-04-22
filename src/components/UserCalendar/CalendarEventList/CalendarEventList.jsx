import React from "react";
import { Grid } from "@material-ui/core";
import "./calendarEventList.scss";
// import { useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import Paper from "@material-ui/core/Paper/Paper";
function CalendarEventList(props) {
  var courseStates = {};
  courseStates["Creative Problem Solving"] = props.checked1;
  courseStates["Critical Thinking"] = props.checked2;
  courseStates["Negotiation Skills"] = props.checked3;
  courseStates["Measuring Results From Training"] = props.checked4;
  courseStates["Emotional Intelligence"] = props.checked5;

  var calendarEvents = [];
  var date = new Date(props.date);
  var data = require("../../../assets/db.json"); // forward slashes will depend on the file location

  for (var i = 0; i < data.courses.length; i++) {
    var title = data.courses[i].title;
    var assignments = data.courses[i].assignments;
    for (var j = 0; j < assignments.length; j++) {
      var obj = assignments[j];
      var dueDate = new Date(obj.dueDate);
      if (dueDate.getTime() === date.getTime()) {
        if (props.courseName && props.courseName === obj.class) {
          calendarEvents.push(obj);
        }
        if (!props.courseName &&  courseStates[obj.class] === true) {
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
          <Paper className="event">
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
export default CalendarEventList;
