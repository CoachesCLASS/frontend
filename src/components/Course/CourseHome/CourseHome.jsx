import React from "react";
import { Grid } from "@material-ui/core";
import "./courseHome.scss";
import SimpleAppBar from "../../UserSettings/SimpleAppBar/SimpleAppBar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Avatar from "../../UserSettings/Avatar/Avatar";
import CourseCalendar from "../../Calendar/Calendar";

function CourseHome(props) {
  return (
    <>
      <SimpleAppBar title="Coaches C.L.A.S.S." value={2} />
      <div className="wrapper">
        <Grid container alignItems="center" className="courseDetails">
          <Avatar />
          <Grid container style={{ paddingTop: 5 }} justify="center">
            <Typography component="h6"> Entrepreneurship 101</Typography>
          </Grid>
          <Grid container style={{ paddingBottom: 15 }} justify="center">
            <Typography component="h6"> Bert Robinson</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          className="courseTabs"
        >
          <div className="buttonWrapper">
            <Button className="courseTab">
              <Typography
                component="p"
                style={{ fontSize: "14px", color: "black" }}
              >
                Announcements
              </Typography>
            </Button>
          </div>

          <div className="buttonWrapper">
            <Button className="courseTab">
              <Typography
                component="p"
                align="center"
                style={{ fontSize: "14px", color: "black" }}
              >
                Assignments
              </Typography>
            </Button>
          </div>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          className="courseTabs"
        >
          <div className="buttonWrapper">
            <Button className="courseTab">
              <Typography
                component="p"
                style={{ fontSize: "14px", color: "black" }}
              >
                Grades
              </Typography>
            </Button>
          </div>

          <div className="buttonWrapper">
            <Button className="courseTab">
              <Typography
                component="p"
                align="center"
                style={{ fontSize: "14px", color: "black" }}
              >
                Files
              </Typography>
            </Button>
          </div>
        </Grid>
        <CourseCalendar />
      </div>
    </>
  );
}

export default CourseHome;
