import React from "react";
import { Grid } from "@material-ui/core";
import "./calendarEventList.scss";
// import { useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import Paper from "@material-ui/core/Paper/Paper";
function CalendarEventList(props) {
  //   const [date, setDate] = useState(new Date());
  var data = require("../../../assets/db.json"); // forward slashes will depend on the file location
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    console.log("Course: " + obj + "\n");
  }
  return (
    <>
      <Typography variant="h6" className="eventListTitle">
        Events on {props.date}:
      </Typography>
      <Grid container direction="column" className="eventList">
        <Paper className="event">
          <CalendarEvent
            type="assignment"
            className="Entrepreneurship 101"
            title="Homework #1 due"
          />
        </Paper>
        <Paper className="event">
          <CalendarEvent
            type="assignment"
            className="Technical Skills"
            title="Project proposal due"
          />
        </Paper>
        <Paper className="event">
          <CalendarEvent
            type="assessment"
            className="Technical Skills"
            title="Microsoft quiz due"
          />
        </Paper>
        <Paper className="event">
          <CalendarEvent
            type="discussion"
            className="Communication Skills"
            title="Discussion: Why are soft skills important?"
          />
        </Paper>
      </Grid>
    </>
  );
}
export default CalendarEventList;
