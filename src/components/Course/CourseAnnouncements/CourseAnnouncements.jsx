import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./courseAnnouncements.scss";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "../../UserSettings/Avatar/Avatar";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles"
import { connect } from "react-redux";
import courseData from "../../../assets/db.json"

const useStyles = makeStyles(theme => ({
  margin: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
}))

const mapStateToProps = (state) => {
  return {
    instructor: state.instructor.isInstructor,
    userId: state.userId.id,
  }
}

function CourseAnnouncements(props) {
  const classes = useStyles()

  const courseObject = courseData.courses.find(x => x.title === props.match.params.courseName)
  const [announcements, setAnnouncements] = useState(courseObject.announcements)
  const [values, setValues] = useState({
    title: '',
    body: '',
  });

  const addAnnouncement = () => {
    setAnnouncements([
      ...announcements,
      values
    ])

    setValues({title: '', body: ''})
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <div className="wrapper">
        <Grid container alignItems="center" className="courseDetails">
          <Avatar />
          <Grid container style={{ paddingTop: 5 }} justify="center">
            <Typography component="h6">
              {" "}
              {props.match.params.courseName}
            </Typography>
          </Grid>
          <Grid container style={{ paddingBottom: 15 }} justify="center">
            <Typography component="h6"> Bert Robinson</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          className="courseTabs"
        >
          <NavLink
            to={"/CourseHome/" + props.match.params.courseName}
            className="navLink"
          >
            <Typography className="navtab">Home > </Typography>
          </NavLink>

          <NavLink to="/CourseAnnouncements" className="navLinkActive">
            <Typography className="navtabActive" color="secondary">
              Announcements
            </Typography>
          </NavLink>
        </Grid>
        <Grid container direction="column" spacing={2}>
          {
            announcements.map(item => (
              <Grid item key={item.body}>
                <Paper className="courseAnnouncement" elevation={1}>
                  <Typography variant="h5" component="h3">
                    {item.title}
                  </Typography>
                  <Typography component="p">
                    {item.body}
                  </Typography>
                </Paper>
              </Grid>
            ))
          }
          {
            props.instructor && (
              <Grid item>
                <Paper className="courseAnnouncement" elevation={1}>
                  <TextField
                    fullWidth
                    label="Title"
                    className={classes.textField}
                    value={values.title}
                    onChange={handleChange('title')}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Body"
                    className={classes.textField}
                    value={values.body}
                    onChange={handleChange('body')}
                    margin="normal"
                    variant="outlined"
                  />
                  <Button variant="contained" color="primary" className={classes.button} onClick={addAnnouncement}>
                    Add Announcement
                  </Button>
                </Paper>
              </Grid>
            )
          }
        </Grid>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(CourseAnnouncements);
