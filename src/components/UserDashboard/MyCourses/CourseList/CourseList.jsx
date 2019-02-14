import React from "react";
import { Grid } from "@material-ui/core";
import "./coursesList.scss";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
function CourseList(props) {
  return (
    <>
      <Paper className="listContainer">
        <Typography variant="h6" color="inherit" className="listTitle">
          {props.title}
        </Typography>
        <hr className="line" />
        <ul className="list">
          <li>
            <Grid container xs={12} className="courseEntry">
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="inherit">
                  Course Name
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="inherit">
                  Taught By
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" color="inherit">
                  Term
                </Typography>
              </Grid>
            </Grid>
          </li>
          <li>
            <Grid container xs={12} className="courseEntry">
              <Grid item xs={4}>
                <Typography variant="body2" color="inherit">
                  Entrepreneurship 101
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="inherit">
                  Bert Robinson
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="inherit">
                  9/18/18 - 12/20/18
                </Typography>
              </Grid>
            </Grid>
          </li>
          <li>
            <Grid container xs={12} className="courseEntry">
              <Grid item xs={4}>
                <Typography variant="body2" color="inherit">
                  Communications 101
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="inherit">
                  Bert Robinson
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="inherit">
                  9/18/18 - 12/20/18
                </Typography>
              </Grid>
            </Grid>
          </li>
        </ul>
      </Paper>
    </>
  );
}

export default CourseList;
