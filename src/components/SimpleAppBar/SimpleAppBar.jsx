import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./simpleAppBar.scss";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid/Grid";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/CC Logo.png";

const navTabs = [
  {
    label: "Settings",
    path: "/UserSettings"
  },
  {
    label: "Dashboard",
    path: "/UserDashboard"
  },
  {
    label: "Courses",
    path: "/MyCourses"
  },
  {
    label: "Calendar",
    path: "/UserCalendar"
  }
];

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
              <img src={logo} alt="" height="25" width="25" className="pr-4" />

              <Typography variant="h6" color="primary">
                {props.title}
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={6}>
            <Tabs value={val} indicatorColor="primary" textColor="primary">
              {navTabs.map(tab => (
                <NavLink to={tab.path} className="navLink">
                  <Tab
                    onClick={() => setValue(0)}
                    label={tab.label}
                    // to="/UserSettings"
                    // component={Link}
                  />
                </NavLink>
              ))}
              {/* <Tab
                onClick={() => setValue(1)}
                label="Dashboard"
                // to="/UserDashboard"
                // component={Link}
              />
              <Tab onClick={() => setValue(2)} label="My Courses" />
              <Tab onClick={() => setValue(3)} label="Calendar" /> */}
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;
