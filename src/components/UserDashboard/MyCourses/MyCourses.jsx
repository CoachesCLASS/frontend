import React from "react";
import { Grid } from "@material-ui/core";
import "./myCourses.scss";
import SimpleAppBar from "../../Katie/SimpleAppBar/SimpleAppBar";
import CourseList from "./CourseList/CourseList";
function MyCourses(props) {
  return (
    <>
      <SimpleAppBar title="Coaches C.L.A.S.S." />
      <Grid className="courses">
        <CourseList title="Current Courses" />
      </Grid>
      <Grid className="courses">
        <CourseList title="Previous Courses" />
      </Grid>
    </>
  );
}

export default MyCourses;