import React from "react";
import { Grid } from "@material-ui/core";
import "./katie.scss";
import SimpleAppBar from "./SimpleAppBar/SimpleAppBar";
import Avatar from "./Avatar/Avatar";
import ListItemComposition from "./MenuList/MenuList";
import Link from "@material-ui/core/Link";

function Katie(props) {
  return (
    <>
      <SimpleAppBar title="User Settings" />
      <Grid
        container
        direction="row"
        xs={12}
        spacing={0}
        style={{ height: "100%" }}
      >
        <Grid container alignItems="center" xs={4}>
          <Grid
            item
            style={{ border: "1px solid grey", height: "100%", width: "100%" }}
          >
            <Grid container className="mainImg" justify="center">
              <Avatar />
              <Grid item justify="center">
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
              <Grid item style={{ marginTop: 20 }} justify="center">
                <ListItemComposition />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          xs={8}
          style={{ border: "1px solid grey" }}
        />
      </Grid>
    </>
  );
}

export default Katie;
