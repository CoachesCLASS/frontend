import React from "react";
import { Grid } from "@material-ui/core";
import "./userCalendar.scss";
import { useState } from "react";
import SimpleAppBar from "../SimpleAppBar/SimpleAppBar";
import CalendarControlPanel from "./CalendarControlPanel/CalendarControlPanel";
import Calendar from "react-calendar/dist/entry.nostyle";
import CalendarEventList from "./CalendarEventList/CalendarEventList";
function UserCalendar(props) {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <SimpleAppBar title="Coaches C.L.A.S.S." value={1} />
      <Grid container xs={12} className="contentContainer">
        <Grid item xs={9}>
          <Grid
            container
            direction="column"
            alignItems="center"
            className="calendarContainer"
          >
            <Grid item>
              <Calendar
                className="calendar"
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
