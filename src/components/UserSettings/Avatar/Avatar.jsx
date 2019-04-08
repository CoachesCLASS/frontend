import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import "./avatar.scss";
import Typography from "@material-ui/core/Typography/Typography";
function LetterAvatars(props) {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid container style={{ padding: 10 }} justify="center">
        <Typography component="h6">{props.title}</Typography>
      </Grid>
      <Grid
        container
        className="avatarWrapper"
        justify="center"
        alignItems="flex-start"
      >
        <Avatar className="greyAvatar"> {props.initial}</Avatar>
      </Grid>
    </Grid>
  );
}

export default LetterAvatars;
