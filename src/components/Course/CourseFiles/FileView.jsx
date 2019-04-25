import React from "react";
import { Grid } from "@material-ui/core";
import "./courseFiles.scss";
import SimpleAppBar from "../../SimpleAppBar/SimpleAppBar";
import Paper from "@material-ui/core/Paper";
import ContentRenderer from "../../ContentRenderer/ContentRenderer";
import Typography from "@material-ui/core/Typography/Typography";
import { withRouter } from "react-router-dom";
import { makeStyles} from "@material-ui/styles"

function FileView(props) {
    const handleBackClick = () => {
        props.history.goBack()
    }

    return (
        <>
        <SimpleAppBar title="Coaches C.L.A.S.S." value={2} />
        <div className="wrapper">
            <Grid container>
                  <Typography className="navtab" onClick={handleBackClick}>Back</Typography>
            </Grid>
            <Grid>
                <Paper className="fileContainer">
                      <h2>{props.match.params.fileName}</h2>
                    <hr/>
                      <ContentRenderer filePath={`${props.match.params.courseName}/${props.match.params.fileName}`}></ContentRenderer>
                </Paper>
            </Grid>
        </div>
        </>
    );
}

export default withRouter(FileView);
