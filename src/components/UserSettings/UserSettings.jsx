import React from "react";
import { Grid } from "@material-ui/core";
import "./userSettings.scss";
import Avatar from "./Avatar/Avatar";
import ListItemComposition from "./MenuList/MenuList";
import Link from "@material-ui/core/Link";
import AccountSettings from "./SettingsPages/AccountSettings";
import { Switch, Route } from 'react-router-dom'
import PasswordSettings from "./SettingsPages/PasswordSettings";
import BillingSettings from "./SettingsPages/BillingSettings";
import SubscriptionSettings from "./SettingsPages/SubscriptionSettings";
import userData from "../../assets/users.json"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    userId: state.userId.id,
  }
}

function UserSettings(props) {
  const user = userData.find(x => x.id === props.userId)
  console.log(user)

  return (
    <>
      <Grid
        container
        direction="row"
        spacing={0}
        style={{ height: "100%" }}
      >
        <Grid item xs={3}>
          <Grid container className="mainImg" justify="center">
            <Avatar title={user.name} initial={user.name.substring(0,1)} />
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

        <Grid item xs={9}>
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

export default connect(mapStateToProps)(UserSettings);
