import React from "react";
import { Grid } from "@material-ui/core";
import "./calendarEventList.scss";
// import { useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import CalendarEvent from "../CalendarEvent/CalendarEvent";
import Paper from "@material-ui/core/Paper/Paper";
function CalendarEventList(props) {
  //   const [date, setDate] = useState(new Date());

  return (
    <>
      <Typography variant="h6" className="eventListTitle">
        Events on {props.date}:
      </Typography>
      <Grid container direction="column" className="eventList">
        <Paper className="event">
          <CalendarEvent
            type="assignment"
            class="Entrepreneurship 101"
            title="Homework #1 due"
          />
        </Paper>
        <Paper className="event">
          <CalendarEvent
            type="assignment"
            class="Technical Skills"
            title="Project proposal due"
          />
        </Paper>
        <Paper className="event">
          <CalendarEvent
            type="assessment"
            class="Technical Skills"
            title="Microsoft quiz due"
          />
        </Paper>
        <Paper className="event">
          <CalendarEvent
            type="discussion"
            class="Communication Skills"
            title="Discussion: Why are soft skills important?"
          />
        </Paper>
      </Grid>
    </>
  );
}
export default CalendarEventList;
