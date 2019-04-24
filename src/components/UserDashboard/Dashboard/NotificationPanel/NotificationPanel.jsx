import React from "react";
import Paper from "@material-ui/core/Paper";
import "./notificationPanel.scss";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import DoneIcon from "@material-ui/icons/Done";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    courses: state.allCourses.courses,
    userId: state.userId.id,
  }
}
var numDaysBetween = function(d1, d2) {
  var diff = (d1 - d2);
  return diff / (1000 * 60 * 60 * 24);
};

function NotificationPanel(props) {
  var comingUp = [];
  var recentlyGraded = [];
  var date = new Date();
  var courseData = require("../../../../assets/db.json"); // forward slashes will depend on the file location
  var gradeData = require("../../../../assets/grades.json");

  let courseObjects = props.courses.map(course => { 
    return courseData.courses.find(x => x.title === course)
  })

  for (var i = 0; i < courseObjects.length; i++) {
    var assignments = courseObjects[i].assignments;
    for (var j = 0; j < assignments.length; j++) {
      var obj = assignments[j];
      var dueDate = new Date(obj.dueDate);
      if ((numDaysBetween(dueDate.getTime(),date.getTime()) >= 0 ) && (numDaysBetween(dueDate.getTime(),date.getTime()) <= 3) ) {
          comingUp.push(obj);
      }
    }
  }

  let gradebook = gradeData.filter(gradebook => {
    return gradebook.user === props.userId
  })

  for (var i = 0; i < gradebook[0].courses.length; i++) {
    for (var j = 0; j < gradebook[0].courses[i].grades.length; j++){
      var dueDate = new Date(gradebook[0].courses[i].grades[j].dueDate);
      var score = gradebook[0].courses[i].grades[j].score;
      if ( (numDaysBetween(date.getTime(), dueDate.getTime()) >= 0 ) && (score != "-") && (numDaysBetween(date.getTime(), dueDate.getTime()) <= 3) ) {
            recentlyGraded.push(gradebook[0].courses[i].grades[j]);
      }
    }
  }

  return (
    <Paper elevation={1} className="notificationPanel">
      <div>
        <Typography variant="h6" className="comingUpTitle">
          Coming Up
        </Typography>
        <hr className="mt-0" width="90%" />
        <div className="comingUpList">
          <List>
          {comingUp.map(event => (
              <ListItem>
                      <ListItemIcon style={{ marginRight: 0  }}>
                        <AnnouncementIcon />
                      </ListItemIcon>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            type="h4"
                            style={{
                              fontSize: "15px",
                              color: "black"
                            }}
                          >
                            {"Turn in " + event.title}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            type="body2"
                            style={{ fontSize: "13px", color: "grey" }}
                          >
                            {event.class}
                          </Typography>
                        }
                      />
              </ListItem>
          ))}
          </List>
        </div>
      </div>
      <div>
        <Typography variant="h6" className="comingUpTitle">
          Recent Feedback
        </Typography>
        <hr className="mt-0" width="90%" />
        <div className="comingUpList">
          <List>
          {recentlyGraded.map(event => (

            <ListItem>
              <ListItemIcon style={{ marginRight: 0}}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="h4"
                    style={{
                      fontSize: "15px",
                      color: "black"
                    }}
                  >
                    {event.class + " " + event.assignment}
                  </Typography>
                }
                secondary={
                  <Typography
                    type="body2"
                    style={{ fontSize: "13px", color: "grey" }}
                  >
                    {event.score + "/" + event.outOf}
                  </Typography>
                }
              />
            </ListItem>
          ))}
          </List>
        </div>
      </div>
    </Paper>
  );
}

export default connect(mapStateToProps)(NotificationPanel);
