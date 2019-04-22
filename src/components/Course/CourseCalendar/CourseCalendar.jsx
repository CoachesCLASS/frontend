import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./courseCalendar.scss";
import Calendar from "react-calendar/dist/entry.nostyle";
import CalendarEventList from "../../UserCalendar/CalendarEventList/CalendarEventList";
function CourseCalendar(props) {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="start"
        spacing={40}
        className="courseCalendarContainer"
      >
        <Grid item className="leftItem">
          <Calendar
            className="courseCalendar"
            onChange={date => setDate(date)}
            value={date}
          />
        </Grid>
        <Grid item className="calendarEventList">
          <CalendarEventList
            date={date.toString().substring(0, 15)}
            courseName={props.courseName}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default CourseCalendar;
