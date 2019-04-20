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

function CoursesGrid(props) {
  var randomMC = require("random-material-color");
  const CourseLink = props => (
    <RouterLink to="/CourseHome/{$courseName}" {...props} />
  );

  return (
    <Grid container spacing={24}>
      {/* this is a card row */}
      <Grid container className="cardRow" item spacing={24}>
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
                to="/CourseHome/Entrepreneurship 101"
              >
                Entrepreneurship 101
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
                to="/CourseHome/Leadership 101"
              >
                Leadership 101
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
                to="/CourseHome/Creative Problem Solving"
              >
                Creative Problem Solving
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
      </Grid>
      <Grid container className="cardRow" item spacing={24}>
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
                to="/CourseHome/Negotiation Skills"
              >
                Negotiation Skills
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
                to="/CourseHome/Technical Skills"
              >
                TechnicalSkills
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
      </Grid>
    </Grid>
  );
}

export default CoursesGrid;
