import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./simpleAppBar.scss";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid/Grid";
import { NavLink, withRouter } from "react-router-dom";
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
  const { pathname } = props.location;
  const secondSlashIdx =
    pathname.indexOf("/", 1) > 0 ? pathname.indexOf("/", 1) : pathname.length;
  const val = pathname.substr(0, secondSlashIdx);

  return (
    <AppBar position="fixed" color="primary">
      <Grid container direction="row" spacing={0} className="pt-2">
        <Grid item xs={6}>
          <Toolbar className="p-0">
            <img
              src={logo}
              alt=""
              height="65px"
              width="60px"
              className="ml-4 mr-3 mb-2"
            />
            <img src={logo} alt="" height="25" width="25" className="pr-4" />

            <Typography variant="h6" className="mb-2">
              Coaches C.L.A.S.S.
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={6} className="pb-2">
          <Tabs value={val} indicatorColor="secondary" color="secondary">
            {navTabs.map(tab => (
              <NavLink
                to={tab.path}
                className="appBarNavLink"
                key={tab.label}
                value={tab.path}
              >
                <Tab label={tab.label} />
              </NavLink>
            ))}
          </Tabs>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default withRouter(SimpleAppBar);
