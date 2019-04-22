import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./userCalendar.scss";
import CalendarControlPanel from "./CalendarControlPanel/CalendarControlPanel";
import Calendar from "react-calendar";
import CalendarEventList from "./CalendarEventList/CalendarEventList";


function UserCalendar(props) {
  const [date, setDate] = useState(new Date());
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

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
              <CalendarEventList date={date.toDateString()} checked1={checked1} checked2={checked2} checked3={checked3} checked4={checked4} checked5={checked5}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CalendarControlPanel checked1={checked1} checked2={checked2} checked3={checked3} checked4={checked4} setChecked1={setChecked1} setChecked2={setChecked2} setChecked3={setChecked3} setChecked4={setChecked4} setChecked5={setChecked5}/>
        </Grid>
      </Grid>
    </>
  );
}
export default UserCalendar;
