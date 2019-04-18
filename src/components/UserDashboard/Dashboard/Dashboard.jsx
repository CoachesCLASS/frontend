import React from "react";
import { Grid } from "@material-ui/core";
import "./dashboard.scss";
import CoursesGrid from "./CoursesGrid/CoursesGrid";
import NotificationPanel from "./NotificationPanel/NotificationPanel";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    instructor: state.instructor.isInstructor,
  }
}

function Dashboard(props) {

  return (
    <>
      <Grid container xs={12} className="contentContainer">
        <Grid item xs={9}>
          <CoursesGrid />
        </Grid>
        {
          !props.instructor && (
            <Grid item xs={3}>
              <NotificationPanel />
            </Grid>
          )
        }
      </Grid>
    </>
  );
}

export default connect(mapStateToProps)(Dashboard);
