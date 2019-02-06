import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Grid from "@material-ui/core/Grid";

const styles = {
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 1,
    color: "#fff",
    backgroundColor: deepOrange[500],
    width: 160,
    height: 160
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  avatarWrapper: {
    height: "100%"
  }
};

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid container style={{ padding: 10 }} justify="center">
        <div>Natalie Ryan</div>
      </Grid>
      <Grid
        container
        className={classes.avatarWrapper}
        justify="center"
        alignItems="flex-start"
      >
        <Avatar className={classes.orangeAvatar}>N</Avatar>
      </Grid>
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LetterAvatars);
