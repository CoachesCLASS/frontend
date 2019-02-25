import React from "react";
import { Grid } from "@material-ui/core";
import "./courseAnnouncements.scss";
import SimpleAppBar from "../../SimpleAppBar/SimpleAppBar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Avatar from "../../UserSettings/Avatar/Avatar";
import Paper from "@material-ui/core/Paper";
function CourseAnnouncements(props) {
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
            <Button className="courseTabActive" color="primary">
              <Typography
                component="p"
                style={{ fontSize: "14px", color: "white" }}
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
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className="courseAnnouncement" elevation={1}>
              <Typography variant="h5" component="h3">
                Test tomorrow
              </Typography>
              <Typography component="p" style={{ color: "grey" }}>
                2/21/19
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your
                application.
              </Typography>
            </Paper>
          </Grid>
          <Grid item style={{ marginTop: "1rem" }}>
            <Paper className="courseAnnouncement" elevation={1}>
              <Typography variant="h5" component="h3">
                Group project coming up!!
              </Typography>
              <Typography component="p" style={{ color: "grey" }}>
                2/21/19
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your
                application.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
// alignItems="center"

export default CourseAnnouncements;
