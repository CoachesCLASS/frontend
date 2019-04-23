import React from "react";
import { Grid } from "@material-ui/core";
import "./courseHome.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Avatar from "../../UserSettings/Avatar/Avatar";
import CourseCalendar from "../CourseCalendar/CourseCalendar";
// import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

function CourseHome(props) {
  const CourseAnnouncementsLink = props => (
    <RouterLink to="/CourseAnnouncements/{$courseName}" {...props} />
  );
  const CourseAssignmentsLink = props => (
    <RouterLink to="/CourseAnnouncements/{$courseName}" {...props} />
  );
  const CourseGradesLink = props => (
    <RouterLink to="/CourseGrades/{$courseName}" {...props} />
  );
  const CourseFilesLink = props => (
    <RouterLink to="/CourseFiles/{$courseName}" {...props} />
  );
  return (
    <>
      <div className="wrapper">
        <Grid container alignItems="center" className="courseDetails">
          <Avatar />
          <Grid container style={{ paddingTop: 5 }} justify="center">
            <Typography component="h6">
              {props.match.params.courseName}
            </Typography>
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
            <Button
              className="courseTab"
              component={CourseAnnouncementsLink}
              to={"/CourseAnnouncements/" + props.match.params.courseName }
            >
              <Typography
                component="p"
                style={{ fontSize: "14px", color: "black" }}
              >
                Announcements
              </Typography>
            </Button>
          </div>

          <div className="buttonWrapper">
            <Button
              className="courseTab"
              component={CourseAssignmentsLink}
              to={"/CourseAssignments/" + props.match.params.courseName }
              value="assignments"
            >
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
            <Button
              className="courseTab"
              component={CourseGradesLink}
              to={"/CourseGrades/" + props.match.params.courseName }
            >
              <Typography
                component="p"
                style={{ fontSize: "14px", color: "black" }}
              >
                Grades
              </Typography>
            </Button>
          </div>

          <div className="buttonWrapper">
            <Button
              className="courseTab"
              component={CourseFilesLink}
              to={"/CourseFiles/" + props.match.params.courseName}
            >
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
        <CourseCalendar courseName={props.match.params.courseName} userId={props.match.params.userId}/>
      </div>
    </>
  );
}

export default CourseHome;
