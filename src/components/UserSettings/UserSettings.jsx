import React from "react";
import { Grid } from "@material-ui/core";
import "./userSettings.scss";
import SimpleAppBar from "../SimpleAppBar/SimpleAppBar";
import Avatar from "./Avatar/Avatar";
import ListItemComposition from "./MenuList/MenuList";
import Link from "@material-ui/core/Link";
import AccountSettings from "./SettingsPages/AccountSettings";
import { Switch, Route } from 'react-router-dom'
import PasswordSettings from "./SettingsPages/PasswordSettings";
import BillingSettings from "./SettingsPages/BillingSettings";
import SubscriptionSettings from "./SettingsPages/SubscriptionSettings";

function UserSettings(props) {
  return (
    <>
      <SimpleAppBar title="Coaches C.L.A.S.S." value={0} />
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ height: "100%" }}
      >
        <Grid
          item
          xs={3}
          style={{ border: "1px solid grey", height: "100%", width: "100%" }}
        >
          <Grid container className="mainImg" justify="center">
            <Avatar title="Natalie Ryan" initial="N" />
            <Grid item>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  marginTop: "1rem"
                }}
              >
                <Link
                  component="button"
                  onClick={() => {
                    alert("Use wants to change photo");
                  }}
                >
                  Change Photo
                </Link>
              </div>
            </Grid>
          </Grid>
          <Grid container className="centerAlign" justify="center">
            <Grid item style={{ marginTop: 20 }}>
              <ListItemComposition />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={9}
          style={{ border: "1px solid grey" }}
        >
          <Switch>
            <Route path="/UserSettings/account" component={AccountSettings}/>
            <Route path="/UserSettings/password" component={PasswordSettings}/>
            <Route path="/UserSettings/billing" component={BillingSettings}/>
            <Route path="/UserSettings/subscription" component={SubscriptionSettings}/>
          </Switch>
        </Grid>
      </Grid>
    </>
  );
}

export default UserSettings;
