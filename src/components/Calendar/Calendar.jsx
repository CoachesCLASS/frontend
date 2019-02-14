import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import "./calendar.scss";
function CourseCalendar(props) {
  const [date, setDate] = useState(new Date());

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className="calendarContainer"
    >
      <Calendar
        className="calendar"
        onChange={date => setDate(date)}
        value={date}
      />
    </Grid>
  );
}
export default CourseCalendar;
