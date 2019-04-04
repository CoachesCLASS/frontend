import React from 'react';
import { Grid } from '@material-ui/core';
import { PayPalButton } from "react-paypal-button-v2";

function BillingSettings(props) {
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={4}>
        <h2>Billing Settings</h2>
        <PayPalButton
          amount="1000000"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          }}
        />
      </Grid>
    </Grid>
  )
}

export default BillingSettings;
