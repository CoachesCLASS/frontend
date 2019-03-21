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
        <Grid container direction="row" xs={12} spacing={0} className="pt-2">
          <Grid item xs={6}>
            <Toolbar className="p-0">
              <img
                src={logo}
                alt=""
                height="65px"
                width="60px"
                className="ml-4 mr-3 mb-2"
              />

              <Typography variant="h6" color="primary" className="mb-2">
                {props.title}
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={6} className="pb-2">
            <Tabs value={val} indicatorColor="primary" textColor="primary">
              {navTabs.map(tab => (
                <NavLink to={tab.path} className="appBarNavLink">
                  <Tab onClick={() => setValue(0)} label={tab.label} />
                </NavLink>
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;
