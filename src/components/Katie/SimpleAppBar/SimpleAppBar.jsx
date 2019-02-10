import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./simpleAppBar.scss";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid/Grid";
function SimpleAppBar(props) {
  return (
    <div className="appBar">
      <AppBar position="static" color="default" xs={12}>
        <Grid
          container
          direction="row"
          xs={12}
          spacing={0}
          // style={{ height: "100%" }}
        >
          <Grid item xs={6}>
            <Toolbar>
              <Typography variant="h6" color="inherit">
                {props.title}
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              // value={this.state.value}
              // onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              xs={8}
            >
              <Tab label="User Settings" />
              <Tab label="Dashboard" />
              <Tab label="My Courses" />
              <Tab label="Calendar" />
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

// SimpleAppBar.propTypes = {
//   name: PropTypes.object.isRequired
// };

export default SimpleAppBar;
