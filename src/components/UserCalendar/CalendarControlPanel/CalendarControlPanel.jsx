import React from "react";
import "./calendarControlPanel.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { useState, useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function CalendarControlPanel(props) {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  useEffect(event => {
    console.log(checked1, checked2, checked3, checked4);
  });
  return (
    <>
      <Paper elevation={1} className="toDo">
        <div>
          <Typography variant="h6" className="comingUpTitle">
            Show Coursework
          </Typography>
          <hr class="mt-0" width="90%" />

          <FormGroup column className="checkboxColumn">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked1}
                  onChange={() => setChecked1(!checked1)}
                  value="checked1"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={
                <Typography variant="overline">Entrepreneurship 101</Typography>
              }
              style={{ padding: "0px", height: "50px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked2}
                  onChange={() => setChecked2(!checked2)}
                  value="checked2"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={
                <Typography variant="overline">Communication Skills</Typography>
              }
              style={{ padding: "0px", height: "50px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked3}
                  onChange={() => setChecked3(!checked3)}
                  value="checked3"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={<Typography variant="overline">Leadership 101</Typography>}
              style={{ padding: "0px", height: "50px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked4}
                  onChange={() => setChecked4(!checked4)}
                  value="checked4"
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                />
              }
              label={
                <Typography variant="overline">Technical Skills</Typography>
              }
              style={{ padding: "0px", height: "50px" }}
            />
          </FormGroup>
        </div>
        <div>
          <Typography variant="h6" className="comingUpTitle">
            Undated Events
          </Typography>
          <hr class="mt-0" width="90%" />
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
