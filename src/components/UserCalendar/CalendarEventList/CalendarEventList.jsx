import React from "react";
import { Grid } from "@material-ui/core";
import "./calendarEventList.scss";
// import { useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import Paper from "@material-ui/core/Paper/Paper";
function CalendarEventList(props) {
  var calendarEvents = [];
  //   const [date, setDate] = useState(new Date());
  console.log("testing");
  var data = require("../../../assets/db.json"); // forward slashes will depend on the file location
  console.log(data.courses);
  for (var i = 0; i < data.courses.length; i++) {
    var title = data.courses[i].title;
    var assignments = data.courses[i].assignments;
    var announcements = data.courses[i].announcements;
    console.log("Course: " + title);
    for (var j = 0; j < assignments.length; j++) {
      var obj = assignments[j];
      var dueDate = obj.dueDate;
      if (obj.dueDate == props.date) {
        if (!props.courseName || props.courseName == obj.class) {
          console.log("Assignment: " + obj.title);
          console.log("Due Date: " + dueDate);
          console.log("Calendar Date: " + props.date);
          calendarEvents.push(obj);
        }
      }
      // if (obj.dueDate)
    }
    console.log(calendarEvents);
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
