import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./simpleAppBar.scss";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid/Grid";
import { useState, useEffect } from "react";

function SimpleAppBar(props) {
  const [val, setValue] = useState(props.value);
  useEffect(() => {
    console.log(val);
  });
  return (
    <div className="appBar">
      <AppBar position="static" color="secondary">
        <Grid container direction="row" xs={12} spacing={0}>
          <Grid item xs={6}>
            <Toolbar>
              <img
                src="../../../assets/CoachesCLASS.jpeg"
                alt=""
                height="25"
                width="25"
              />

              <Typography variant="h6" color="primary">
                {props.title}
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={6}>
            <Tabs value={val} indicatorColor="primary" textColor="primary">
              <Tab
                onClick={() => setValue(0)}
                label="User Settings"
                // to="/UserSettings"
                // component={Link}
              />
              <Tab
                onClick={() => setValue(1)}
                label="Dashboard"
                // to="/UserDashboard"
                // component={Link}
              />
              <Tab onClick={() => setValue(2)} label="My Courses" />
              <Tab onClick={() => setValue(3)} label="Calendar" />
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;
