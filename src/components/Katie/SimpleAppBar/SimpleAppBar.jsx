import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./simpleAppBar.scss";

function SimpleAppBar(props) {
  return (
    <div className="appBar">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// SimpleAppBar.propTypes = {
//   name: PropTypes.object.isRequired
// };

export default SimpleAppBar;
