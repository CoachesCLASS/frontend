import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./userCalendar.scss";
import CalendarControlPanel from "./CalendarControlPanel/CalendarControlPanel";
import Calendar from "react-calendar";
import CalendarEventList from "./CalendarEventList/CalendarEventList";
function UserCalendar(props) {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Grid container xs={12} className="contentContainer">
        <Grid item xs={9}>
          <Grid
            container
            direction="column"
            alignItems="center"
            className="leftContainer"
          >
            <Grid item class="userCalendarContainer">
              <Calendar
                className="userCalendar"
                onChange={date => setDate(date)}
                value={date}
              />
            </Grid>
            <Grid item className="calendarEventList">
              <CalendarEventList date={date.toString().substring(0, 15)} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CalendarControlPanel />
        </Grid>
      </Grid>
    </>
  );
}
export default UserCalendar;
