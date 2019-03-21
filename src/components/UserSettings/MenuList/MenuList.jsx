import React from "react";
import PropTypes from "prop-types";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PaymentIcon from "@material-ui/icons/Payment";
import EditIcon from "@material-ui/icons/Edit";
import AccountIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { NavLink } from "react-router-dom"

const menuOptions = [
  {
    title: "Account",
    path: "/UserSettings/account",
    icon: <AccountIcon />,
  },
  {
    title: "Change Password",
    path: "/UserSettings/password",
    icon: <LockIcon />,
  },
  {
    title: "Billing Information",
    path: "/UserSettings/billing",
    icon: <PaymentIcon />,
  },
  {
    title: "Subscriptions",
    path: "/UserSettings/subscription",
    icon: <EditIcon />,
  },
]

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <Paper>
      <MenuList>
        {
          menuOptions.map((item) => (
            <NavLink to={item.path} key={item.title}>
              <MenuItem key={item.title}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  inset
                  primary={item.title}
                  style={{ padding: 0 }}
                />
              </MenuItem>
            </NavLink>
          ))
        }
      </MenuList>
    </Paper>
  );
}

export default ListItemComposition
