import React from "react";
import { Grid } from "@material-ui/core";
import "./courseFiles.scss";
import SimpleAppBar from "../../SimpleAppBar/SimpleAppBar";
import Paper from "@material-ui/core/Paper";
import ContentRenderer from "../../ContentRenderer/ContentRenderer";
import Typography from "@material-ui/core/Typography/Typography";
import { NavLink } from "react-router-dom";


function FileView(props) {
  return (
        <>
        <SimpleAppBar title="Coaches C.L.A.S.S." value={2} />
        <div className="wrapper">
            <Grid
                container
            >
                <NavLink
                    to={"/CourseFiles/" + props.match.params.courseName + "/" + props.match.params.userId}
                    className="navLink"
                >
                    <Typography className="navtab">Back</Typography>
                </NavLink>
            </Grid>
            <Grid>
                <Paper className="fileContainer">
                    <h1>Training Manual</h1>
                    <hr/>
                    <ContentRenderer></ContentRenderer>
                </Paper>
            </Grid>
        </div>
        </>
    );
}

export default FileView;