import React from "react";
import { Grid } from "@material-ui/core";
import "./calendarEvent.scss";
// import { useState } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CommentIcon from "@material-ui/icons/Comment";

function CalendarEvent(props) {
  //   const [date, setDate] = useState(new Date());

  return (
    <>
      <Grid container direction="column" className="calendarEvent">
        <Grid item>
          <Grid container direction="row">
            <Grid item style={{ padding: "4px" }}>
              {props.type === "Homework" && <AssignmentIcon />}
              {props.type === "Test" && <AssessmentIcon />}
              {props.type === "Quiz" && <AssessmentIcon />}
              {props.type === "Project" && <AssignmentIcon />}
              {props.type === "Discussion" && <CommentIcon />}
            </Grid>
            <Grid item>
              <Typography variant="overline">{props.className}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ paddingLeft: "4px" }}>
          <Typography variant="caption">{props.title}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
export default CalendarEvent;
