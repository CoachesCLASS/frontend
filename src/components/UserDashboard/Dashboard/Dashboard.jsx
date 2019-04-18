import React from "react";
import { Grid } from "@material-ui/core";
import "./dashboard.scss";
import CoursesGrid from "./CoursesGrid/CoursesGrid";
import NotificationPanel from "./NotificationPanel/NotificationPanel";
function Dashboard(props) {
  return (
    <>
      <Grid container className="contentContainer">
        <Grid item xs={9}>
          <CoursesGrid />
        </Grid>
        <Grid item xs={3}>
          <NotificationPanel />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
