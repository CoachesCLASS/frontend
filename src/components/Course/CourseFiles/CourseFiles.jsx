import React from "react";
import { Grid } from "@material-ui/core";
import "./courseFiles.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import IconButton from "@material-ui/core/IconButton";

function CourseFiles(props) {
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
          <NavLink
            to={"/CourseHome/" + props.match.params.courseName + "/" +  props.match.params.userId}
            className="navLink"
          >
            <Typography className="navtab">Home > </Typography>
          </NavLink>

          <NavLink to="/CourseFiles" disabled className="navLinkActive">
            <Typography className="navtabActive" color="secondary">
              Files
            </Typography>
          </NavLink>
        </Grid>
        <Paper className="fileContainer">
          <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
            <li>
              <Grid container direction="row">
                <IconButton
                  style={{
                    margin: "0px 5px 0px 0px",
                    padding: "0px 3px 0px 3px"
                  }}
                >
                  <SaveAltIcon />
                </IconButton>
                <div style={{ padding: "4px" }}>
                  <NavLink
                    to={"/CourseFiles/" + props.match.params.courseName + "/" + props.match.params.userId + "/FileView"}
                    className="navLink"
                  >
                    <Typography
                      variant="body2"
                      component="h3"
                      style={{ margin: "auto" }}
                    >
                      Powerpoint 1
                    </Typography>
                  </NavLink>
                </div>
              </Grid>
            </li>
            <li>
              <Grid container direction="row">
                <IconButton
                  style={{
                    margin: "0px 5px 0px 0px",
                    padding: "0px 3px 0px 3px"
                  }}
                >
                  <SaveAltIcon />
                </IconButton>
                <div>
                  <NavLink
                    to={"/CourseFiles/" + props.match.params.courseName + "/" + props.match.params.userId + "/FileView"}
                    className="navLink"
                  >
                    <Typography
                      variant="body2"
                      component="h3"
                      style={{ margin: "auto" }}
                    >
                      Powerpoint 2
                    </Typography>
                  </NavLink>
                </div>
              </Grid>
            </li>
          </ul>
        </Paper>
      </div>
    </>
  );
}

export default CourseFiles;
