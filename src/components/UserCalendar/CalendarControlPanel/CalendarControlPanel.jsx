import React from "react";
import "./calendarControlPanel.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import blue from "@material-ui/core/colors/blue";
import {connect} from 'react-redux';
import { SET_CHECKED_COURSES, SET_COURSES } from '../../../store/actionTypes';

const mapStateToProps = (state) => {
  return {
    userId: state.userId.id,
    courses: state.allCourses.courses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCheckedCourses: (checked) => {
      dispatch({
        type: SET_CHECKED_COURSES,
        checked,
      })
    },
    setCourses: (courses) => {
      dispatch({
        type: SET_COURSES,
        courses,
      })
    },
  }
}

function CalendarControlPanel(props) {
  function removeCourse(course) {
    var ind = props.checkedCourses.indexOf(course);
    return props.checkedCourses.splice(ind,1);
  }

  const handleChange = event => {
    props.setCheckedCourses(event.target.checkedCourses)
  }

  return (
    <>
      <Paper elevation={1} className="toDo">
        <div>
          <Typography variant="h6" className="comingUpTitle">
            Show Coursework
          </Typography>
          <hr className="mt-0" width="90%" />

          <FormGroup column className="checkboxColumn">
          {props.courses.map(course => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.checkedCourses[course]}
                  onChange={props.onCourseChecked(course)}
                  style={{ color: blue[500] }}
                  value={course}
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={
                <Typography variant="overline" className="classTitle">{course}</Typography>
              }
              style={{ padding: "0px", height: "50px" }}
            />
          ))}
          </FormGroup>
        </div>
        <div>
          <Typography variant="h6" className="comingUpTitle">
            Undated Events
          </Typography>
          <hr className="mt-0" width="90%" />
          <div className="comingUpList">
            <Typography
              type="h4"
              style={{
                fontSize: "14px",
                color: "black"
              }}
            >
              No undated items
            </Typography>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarControlPanel);
