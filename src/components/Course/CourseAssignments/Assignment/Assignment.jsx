import React from "react";
import { Grid, Button } from "@material-ui/core";
import "./assignment.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import { FilePicker } from 'react-file-picker'

import HiddenContent from "../../../ContentRenderer/HiddenContent";

function Assignment(props) {
  return (
    <>
      <div className="wrapper">
        <Grid
          container
        >
          <NavLink
            to={"/CourseHome/" + props.match.params.courseName}
            className="navLink"
          >
            <Typography className="navtab">Course Home</Typography>
          </NavLink>
        </Grid>

        <Grid className="assignmentContainer" spacing={2}>
          <Paper className="listContainer">
            <p id="assignmentInfo">{props.match.params.assignmentName}

              <input id="button-file" multiple type="file" style={{display: "none"}}/> 
              <label htmlFor="button-file" id="submitButton"> 
              <Button raised component="span" variant="contained" size="large" color="primary"> 
                Submit Assignment 
              </Button> 
              </label> 
            </p>
            <hr className="line" />
            <p><span id="date"><span id="emphasize">Due</span> Thursday by 11:59pm</span><span id="points"><span id="emphasize">Points</span> 10</span><span id="submitting"><span id="emphasize">Submitting</span> a PDF file</span></p>
            <hr className="line" />
            <p id="assignmentTitle">
              Assignment #1- Due Thursday, April 25
            </p>
            <p id="desc">Submit to Canvas by 11:59pm – late homework will not be accepted. <br></br>

              Chapter 5 problems – please do the problems in the document CSE4381_S19_hw10_asgt.pdf <br></br>

              Please put your name and assignment number (1) on your homework.
            </p>
        
            {/* <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra ornare mauris nec faucibus. Praesent ultrices aliquet magna, eu euismod diam molestie ut. Integer aliquet euismod imperdiet. Aenean nec ipsum nisl. Sed tempor purus odio, vel ullamcorper arcu sodales viverra. Nulla condimentum ante at erat vestibulum, a iaculis mauris lacinia. Donec non nulla pretium, auctor est ut, porta felis. Quisque vitae ornare lacus. Pellentesque congue pulvinar arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

            Nulla mauris risus, tincidunt ut diam in, faucibus pretium neque. Aenean rhoncus nisi a nulla rhoncus, eu convallis risus ullamcorper. Duis tristique orci eget dolor bibendum viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam consequat neque quis mi convallis, eu aliquam erat rutrum. Pellentesque id faucibus enim. Mauris non est sed ante mollis porttitor quis eget felis. Nunc et laoreet mauris, et ultricies neque. Pellentesque placerat viverra mi sit amet placerat.

            Donec sed ultricies eros. Donec ac magna at diam gravida pretium. Fusce eu nulla mi. Maecenas neque ex, porttitor vel vulputate mattis, tempor in odio. Nunc aliquam volutpat sapien, at consectetur nunc laoreet sit amet. Donec fermentum auctor enim, eget vehicula magna luctus eu. Etiam tempor eros eget sollicitudin ultricies.

            Sed a maximus odio. Maecenas nec magna vitae massa iaculis sollicitudin auctor vel metus. Phasellus sed nulla consequat, fringilla quam vitae, sollicitudin sapien. Etiam suscipit mauris nec urna porttitor interdum. Donec arcu tellus, congue rutrum risus non, faucibus tempus est. Vivamus diam nisi, semper a metus sit amet, porttitor luctus orci. Nullam eget tempor est, in porta nisi. Suspendisse ut accumsan odio, id consequat nunc. Morbi sed condimentum mi. Aliquam erat volutpat.

            Suspendisse euismod libero quis risus luctus, eu varius ex sodales. Maecenas gravida nibh at diam aliquet, ac venenatis lorem fermentum. Donec sed rutrum neque. Aenean ut enim non erat dignissim dignissim eleifend sed libero. Phasellus vel lectus id ante condimentum molestie eget id arcu. Praesent a justo ut justo venenatis sollicitudin ac maximus felis. Aenean fringilla viverra urna, et eleifend risus pretium at. Nulla eleifend turpis vitae laoreet facilisis. Fusce tristique augue odio, quis tempus lectus consequat sed. Maecenas vestibulum sit amet nisl vitae gravida. Duis auctor sapien pulvinar metus congue, at consectetur nisl suscipit. Cras in porta purus, at mollis mi. Morbi luctus, nulla vitae feugiat mattis, leo augue hendrerit ligula, id rutrum erat ante et sem. Praesent lacinia sem justo, id finibus tellus iaculis vel.</p> */}
          </Paper>
        </Grid>
        <Grid className="assignmentContainer" spacing={2}>
            <HiddenContent></HiddenContent>
        </Grid>
      </div>
    </>
  );
}

export default Assignment;
