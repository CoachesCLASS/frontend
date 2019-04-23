import React from "react";
import { Grid } from "@material-ui/core";
import "./dashboard.scss";
import CoursesGrid from "./CoursesGrid/CoursesGrid";
import NotificationPanel from "./NotificationPanel/NotificationPanel";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    instructor: state.instructor.isInstructor,
    userId: state.userId.id,
  }
}

function Dashboard(props) {
  return (
    <>
      <Grid container className="contentContainer">
        <Grid item xs={9}>
          <CoursesGrid userId={props.userId}/>
        </Grid>
        {
          !props.instructor && (
            <Grid item xs={3}>
              <NotificationPanel userId={props.userId}/>
            </Grid>
          )
        }
      </Grid>
    </>
  );
}

export default connect(mapStateToProps)(Dashboard);
