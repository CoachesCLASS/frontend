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

function CalendarControlPanel(props) {
  var userData = require("../../../assets/users.json");
  for (var i = 0; i < userData.length; i++) {
    if( userData[i].id === props.userId){
      var courses = userData.courses;
    }
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.checked1}
                  onChange={() => props.setChecked1(!props.checked1)}
                  style={{ color: blue[500] }}
                  value="checked1"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={
                <Typography variant="overline" className="classTitle">Creative Problem Solving</Typography>
              }
              style={{ padding: "0px", height: "50px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.checked2}
                  style={{ color: blue[500] }}
                  onChange={() => props.setChecked2(!props.checked2)}
                  value="checked2"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={
                <Typography variant="overline" className="classTitle">Critical Thinking</Typography>
              }
              style={{ padding: "0px", height: "50px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.checked3}
                  style={{ color: blue[500] }}
                  onChange={() => props.setChecked3(!props.checked3)}
                  value="checked3"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={<Typography variant="overline" className="classTitle">Negotiation</Typography>}
              style={{ padding: "0px", height: "50px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.checked4}
                  onChange={() => props.setChecked4(!props.checked4)}
                  style={{ color: blue[500] }}
                  value="checked4"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={
                <Typography variant="overline" className="classTitle">Measuring Results From Training</Typography>
              }
              style={{ padding: "0px", height: "50px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.checked5}
                  onChange={() => props.setChecked5(!props.checked5)}
                  style={{ color: blue[500] }}
                  value="checked5"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={
                <Typography variant="overline" className="classTitle">Emotional Intelligence</Typography>
              }
              style={{ padding: "0px", height: "50px" }}
            />
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

export default CalendarControlPanel;
