import {
  Collapse,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import mainlogo from "../Assest/logo.png";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { vog, family, midwife, moh } from "../Data/SidebarData";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { auto } from "@popperjs/core";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const drawerWidth = 260;

const DisplaySidebar = () => {
  const naviagate = useNavigate();
  const [openMenus, setOpenMenus] = useState({});
  const authContext = useAuth();

  const handleClick = (menuName) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menuName]: !prevOpenMenus[menuName],
    }));
  };

  const handleClickForNavigate = (path) => {
    naviagate(path);
  };

  // const sideBarHander = authContext.position == "Admin" ? midwife : family;

  var sideBarHander = [];
  if (authContext.position == "Midwife") {
    sideBarHander = midwife;
  } else if (authContext.position == "Family") {
    sideBarHander = family;
  } else if (authContext.position == "Vog") {
    sideBarHander = vog;
  } else if (authContext.position == "MOH") {
    sideBarHander = moh;
  }
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#00A9BB", // Set the background color to your desired color
          color: "white", // Set the text color to white
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          marginTop: "10px",
          padding: "30px",
        }}
      >
        <img
          src={mainlogo}
          alt="Logo"
          style={{
            width: "100%",
            paddingTop: "60px",
            paddingBottom: "50px",
          }}
        />
      </div>
      <List sx={{ paddingTop: "20px" }}>
        {sideBarHander.map((menu) => (
          <React.Fragment key={menu.name}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={
                  menu.subMenu
                    ? () => handleClick(menu.name)
                    : () => handleClickForNavigate(menu.path)
                }
                selected={openMenus[menu.name]}
              >
                <ListItemIcon style={{ color: "white" }}>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.name} />
                {menu.subMenu &&
                  (openMenus[menu.name] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>
            {menu.subMenu && (
              <Collapse in={openMenus[menu.name]} timeout={auto} unmountOnExit>
                <List component="div" disablePadding>
                  {menu.subMenu.map((subItem) => (
                    <ListItem
                      key={subItem.name}
                      sx={{ backgroundColor: "#00818F" }}
                      disablePadding
                    >
                      <ListItemButton
                        onClick={() => handleClickForNavigate(subItem.path)}
                      >
                        <ListItemText primary={subItem.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <List sx={{ marginTop: "auto" }}>
        <ListItem>
          <ListItemButton onClick={() => handleClickForNavigate("/login")}>
            <ListItemText primary="Logout" />
            <ListItemIcon style={{ color: "white" }}>
              <LogoutRoundedIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DisplaySidebar;
