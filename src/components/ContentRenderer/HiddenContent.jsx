import React, { Component } from 'react';
import { Grid, Button } from "@material-ui/core";
import "./content.scss";

var showHide = "Show"

class HiddenContent extends Component {
    constructor () {
      super()
      this.state = {
        isHidden: true
      }
    }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
      if(showHide === "Show"){
          showHide = "Hide";
      }
      else{
          showHide = "Show"
      }
    }
    render () {
      return (
        <div>
            <Button variant="contained" size="large" color="primary" onClick={this.toggleHidden.bind(this)}>
                {showHide} Attachment
              </Button> 
            <div id="showContent" >
                {!this.state.isHidden && this.props.children}
            </div>
        </div>
      )
    }
}

export default HiddenContent;
