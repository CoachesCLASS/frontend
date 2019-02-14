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

// import IconButton from "@material-ui/core/IconButton";
function NotificationPanel(props) {
  return (
    <Paper elevation={1} className="toDo">
      <div>
        <Typography variant="h6" className="comingUpTitle">
          Coming Up
        </Typography>
        <hr class="mt-0" width="90%" />
        <div className="comingUpList">
          <List>
            <ListItem>
              <ListItemIcon style={{ marginRight: 0 }}>
                <AnnouncementIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="h4"
                    style={{
                      fontSize: "17px",
                      color: "black"
                    }}
                  >
                    Turn in Assignment 2
                  </Typography>
                }
                secondary={
                  <Typography
                    type="body2"
                    style={{ fontSize: "13px", color: "grey" }}
                  >
                    Entrepreneurship 101
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
      <div>
        <Typography variant="h6" className="comingUpTitle">
          Recent Feedback
        </Typography>
        <hr class="mt-0" width="90%" />
        <div className="comingUpList">
          <List>
            <ListItem>
              <ListItemIcon style={{ marginRight: 0 }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="h4"
                    style={{
                      fontSize: "17px",
                      color: "black"
                    }}
                  >
                    Entrepreneurship Assignment 1
                  </Typography>
                }
                secondary={
                  <Typography
                    type="body2"
                    style={{ fontSize: "13px", color: "grey" }}
                  >
                    100/100 points
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    </Paper>
  );
}

export default NotificationPanel;
