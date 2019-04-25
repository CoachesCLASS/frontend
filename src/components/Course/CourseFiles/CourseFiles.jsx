import React from "react";
import { Grid, ListItem, ListItemAvatar, ListItemText, Avatar as MuiAvatar, List } from "@material-ui/core";
import "./courseFiles.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import Paper from "@material-ui/core/Paper";
import { NavLink, Link } from "react-router-dom";
import { SaveAlt as SaveAltIcon, Folder as FolderIcon } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import data from "../../../assets/db.json"

function CourseFiles(props) {
  const files = data.courses.find(x => x.title === props.match.params.courseName).files

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
            <Typography component="h6">Bert Robinson</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          className="courseTabs"
        >
          <NavLink
            to={"/CourseHome/" + props.match.params.courseName}
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
          <List>
            {
              files.map(fileName => (
                <ListItem key={fileName}>
                  <ListItemAvatar>
                    <MuiAvatar>
                      <SaveAltIcon />
                    </MuiAvatar>
                  </ListItemAvatar>
                  <Link to={"/CourseFiles/" + props.match.params.courseName + "/FileView/" + fileName}>
                    <ListItemText primary={fileName} className="px-3"/>
                  </Link>
                </ListItem>
              ))
            }
          </List>
        </Paper>
      </div>
    </>
  );
}

export default CourseFiles;
