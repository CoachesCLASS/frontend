import React from "react";
import { Grid } from "@material-ui/core";
import "./coursesGrid.scss";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function CoursesGrid(props) {
  return (
    <div>
      <Grid container className="cardsContainer" spacing={8}>
        <Grid container className="cardRow" item xs={12} spacing={24}>
          <React.Fragment>
            <Grid item xs={3}>
              <Card className="card">
                <CardHeader
                  className="cardTop bg-primary"
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent className="cardContent">
                  <Typography component="h1" className="courseTitle">
                    <Link>Entrepreneurship 101</Link>
                  </Typography>
                  <Typography component="p" className="courseSub">
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
            <Grid item xs={3}>
              <Card className="card">
                <CardHeader
                  className="cardTop bg-primary"
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent className="cardContent">
                  <Typography component="h1" className="courseTitle">
                    <Link>Leadership101</Link>
                  </Typography>
                  <Typography component="p" className="courseSub">
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
            <Grid item xs={3}>
              <Card className="card">
                <CardHeader
                  className="cardTop bg-primary"
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent className="cardContent">
                  <Typography component="h1" className="courseTitle">
                    <Link>Communication Skills</Link>
                  </Typography>
                  <Typography component="p" className="courseSub">
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
          </React.Fragment>
        </Grid>
        <Grid container className="cardRow" item xs={12} spacing={24}>
          <React.Fragment>
            <Grid item xs={3}>
              <Card className="card">
                <CardHeader
                  className="cardTop bg-primary"
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent className="cardContent">
                  <Typography component="h1" className="courseTitle">
                    <Link>Technical Skills</Link>
                  </Typography>
                  <Typography component="p" className="courseSub">
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
            <Grid item xs={3}>
              <Card className="card">
                <CardHeader
                  className="cardTop bg-primary"
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent className="cardContent">
                  <Typography component="h1" className="courseTitle">
                    <Link>Management 101</Link>
                  </Typography>
                  <Typography component="p" className="courseSub">
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
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
}

export default CoursesGrid;
