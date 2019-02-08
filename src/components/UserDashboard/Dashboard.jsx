import React from "react";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./dashboard.scss";
import CoursesGrid from "./CoursesGrid/CoursesGrid";
import SimpleAppBar from "../Katie/SimpleAppBar/SimpleAppBar";
import NotificationPanel from "./NotificationPanel/NotificationPanel";
function Dashboard(props) {
  return (
    <>
      <SimpleAppBar title="My Dashboard" />
      <Grid container xs={12} className="contentContainer">
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
