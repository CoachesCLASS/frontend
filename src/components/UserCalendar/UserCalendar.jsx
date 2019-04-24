import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./userCalendar.scss";
import CalendarControlPanel from "./CalendarControlPanel/CalendarControlPanel";
import Calendar from "react-calendar";
import CalendarEventList from "./CalendarEventList/CalendarEventList";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    courses: state.allCourses.courses,
    userId: state.userId.id,
  }
}

function UserCalendar(props) {
  
  const [date, setDate] = useState(new Date());

  let coursesDefault = {}
  props.courses.forEach((course, index) => {
    coursesDefault = {
      ...coursesDefault,
      [course]: false
    }
  })
  const [checkedCourses, setCheckedCourses] = useState(coursesDefault)

  const handleCourseChecked = (course) => (event) => {
    setCheckedCourses({
      ...checkedCourses,
      [course]: event.target.checked
    })
  }

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
              <CalendarEventList date={date.toDateString()} checkedCourses={checkedCourses} userId={props.userId}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <CalendarControlPanel checkedCourses={checkedCourses} onCourseChecked={handleCourseChecked} courses={props.courses}/>
        </Grid>
      </Grid>
    </>
  );
}
export default connect(mapStateToProps)(UserCalendar);
