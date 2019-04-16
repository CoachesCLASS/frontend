import React from "react";
import { Grid } from "@material-ui/core";
import "./myCourses.scss";
import CourseList from "./CourseList/CourseList";
function MyCourses(props) {
  return (
    <>
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
