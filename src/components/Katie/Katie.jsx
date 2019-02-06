import React from "react";
import { Grid } from "@material-ui/core";
import RedirectButton from "../RedirectButton/RedirectButton";
// import Logo from "../../assets/CoachesCLASS.jpeg";
import "./katie.scss";
import SimpleAppBar from "./SimpleAppBar/SimpleAppBar";
import Avatar from "./Avatar/Avatar";

function Katie(props) {
  return (
    <>
      <SimpleAppBar />
      <Grid container alignItems="center" xs={3}>
        <Grid
          item
          className="userSettingsMenu"
          style={{ border: "1px solid black" }}
        >
          <Grid container className="mainImg" justify="center">
            <Avatar />
          </Grid>
          <Grid container className="centerAlign" justify="center">
            <Grid item justify="center">
              <p style={{ textAlign: "center", fontSize: 12, padding: 4 }}>
                Change Photo
              </p>
              <RedirectButton path="/" className="buttonSpacing">
                Account
              </RedirectButton>
              <RedirectButton path="/" className="buttonSpacing">
                Change Password
              </RedirectButton>
              <RedirectButton path="/" className="buttonSpacing">
                Billing Information
              </RedirectButton>
              <RedirectButton path="/" className="buttonSpacing">
                Subscription
              </RedirectButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Katie;
