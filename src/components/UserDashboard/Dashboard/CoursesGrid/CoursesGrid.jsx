import React from "react";
import { Grid } from "@material-ui/core";
import "./coursesGrid.scss";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link as RouterLink } from "react-router-dom";

function courseHomeLink(courseName, userId) {
  return `/CourseHome/${courseName}/${userId}/`;
}
function CoursesGrid(props) {
  var randomMC = require("random-material-color");
  const CourseLink = props => (
    <RouterLink to="/CourseHome/{$courseName}/{$userId}/" {...props} />
  );
  var courses = [];
  var data = require("../../../../assets/users.json"); // forward slashes will depend on the file location
  for (var i = 0; i < data.length; i++) {
    var user = data[i];
    if (data[i].id == props.userId) {
      for(var j = 0; j < data[i].courses.length; j++){
        courses.push(data[i].courses[j]);
      }
    }
  }
  return (
    <Grid container spacing={24}>
      {/* this is a card row */}
      <Grid container className="cardRow" item spacing={24}>
        {courses.map(course => (
            <Grid item>
              <Card className="card">
                <CardHeader
                  className="cardTop"
                  style={{ backgroundColor: randomMC.getColor() }}
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent className="cardContent">
                  <Link
                    style={{ fontSize: "17px", color: "black" }}
                    component={CourseLink}
                    to={courseHomeLink(course, props.userId)}
                  >
                    {course}
                  </Link>
                  <Typography
                    component="p"
                    style={{ fontSize: "14px", color: "grey" }}
                  >
                    Taught by Bert Robinson
                  </Typography>
                </CardContent>
                <CardActions className="cardActions">
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="Show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>        
        ))}
      </Grid>
    </Grid>
  );
}

export default CoursesGrid;
