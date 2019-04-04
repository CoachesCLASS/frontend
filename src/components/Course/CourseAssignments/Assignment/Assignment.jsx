import React from "react";
import { Grid } from "@material-ui/core";
import "./assignment.scss";
import SimpleAppBar from "../../../SimpleAppBar/SimpleAppBar";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../../UserSettings/Avatar/Avatar";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import PDFRenderer from "../../../PDFRenderer/PDFRenderer";
// import AssignmentList from "../AssignmentList/AssignmentList";
// import { defaultProps } from "recompose";

function Assignment(props) {
  return (
    <>
      <SimpleAppBar title="Coaches C.L.A.S.S." value={2} />
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

        <Grid class="assignmentContainer" spacing={2}>
          <Paper className="listContainer">
            <p id="assignmentInfo">{props.match.params.assignmentName} <span id="date">Due 2/3/19</span></p>
            <hr className="line" />
            <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra ornare mauris nec faucibus. Praesent ultrices aliquet magna, eu euismod diam molestie ut. Integer aliquet euismod imperdiet. Aenean nec ipsum nisl. Sed tempor purus odio, vel ullamcorper arcu sodales viverra. Nulla condimentum ante at erat vestibulum, a iaculis mauris lacinia. Donec non nulla pretium, auctor est ut, porta felis. Quisque vitae ornare lacus. Pellentesque congue pulvinar arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

            Nulla mauris risus, tincidunt ut diam in, faucibus pretium neque. Aenean rhoncus nisi a nulla rhoncus, eu convallis risus ullamcorper. Duis tristique orci eget dolor bibendum viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam consequat neque quis mi convallis, eu aliquam erat rutrum. Pellentesque id faucibus enim. Mauris non est sed ante mollis porttitor quis eget felis. Nunc et laoreet mauris, et ultricies neque. Pellentesque placerat viverra mi sit amet placerat.

            Donec sed ultricies eros. Donec ac magna at diam gravida pretium. Fusce eu nulla mi. Maecenas neque ex, porttitor vel vulputate mattis, tempor in odio. Nunc aliquam volutpat sapien, at consectetur nunc laoreet sit amet. Donec fermentum auctor enim, eget vehicula magna luctus eu. Etiam tempor eros eget sollicitudin ultricies.

            Sed a maximus odio. Maecenas nec magna vitae massa iaculis sollicitudin auctor vel metus. Phasellus sed nulla consequat, fringilla quam vitae, sollicitudin sapien. Etiam suscipit mauris nec urna porttitor interdum. Donec arcu tellus, congue rutrum risus non, faucibus tempus est. Vivamus diam nisi, semper a metus sit amet, porttitor luctus orci. Nullam eget tempor est, in porta nisi. Suspendisse ut accumsan odio, id consequat nunc. Morbi sed condimentum mi. Aliquam erat volutpat.

            Suspendisse euismod libero quis risus luctus, eu varius ex sodales. Maecenas gravida nibh at diam aliquet, ac venenatis lorem fermentum. Donec sed rutrum neque. Aenean ut enim non erat dignissim dignissim eleifend sed libero. Phasellus vel lectus id ante condimentum molestie eget id arcu. Praesent a justo ut justo venenatis sollicitudin ac maximus felis. Aenean fringilla viverra urna, et eleifend risus pretium at. Nulla eleifend turpis vitae laoreet facilisis. Fusce tristique augue odio, quis tempus lectus consequat sed. Maecenas vestibulum sit amet nisl vitae gravida. Duis auctor sapien pulvinar metus congue, at consectetur nisl suscipit. Cras in porta purus, at mollis mi. Morbi luctus, nulla vitae feugiat mattis, leo augue hendrerit ligula, id rutrum erat ante et sem. Praesent lacinia sem justo, id finibus tellus iaculis vel.</p>
          </Paper>
        </Grid>
        <Grid class="assignmentContainer" spacing={2}>
        <Paper>
            <PDFRenderer></PDFRenderer>
          </Paper>
        </Grid>
      </div>
    </>
  );
}

export default Assignment;
