import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";

const drawerWidth = 200;

const DrawerLeft = (props) => {
  const { isDark, modeChange, setDrawer, drawer } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={drawer}
        onClose={()=>{
          setDrawer(false)
        }}
      >
        <List>
          {props.width <= 600 && (
            <div>
              {" "}
              <Toolbar /> <Divider />
            </div>
          )}
          {[
            { name: "India", path: "/" },
            { name: "State Wise", path: "/states" },
          ].map((text, index) => (
            <Link to={text.path} className="link" key={text.name}>
              <ListItem button>
                <ListItemIcon>
                  {index === 0 ? <FlagIcon /> : <HomeIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { name: "Global", path: "/global" },
            { name: "About", path: "/about" },
          ].map((text, index) => (
            <Link to={text.path} className="link" key={text.name}>
              <ListItem button>
                <ListItemIcon>
                  {index === 0 ? <PublicIcon /> : <InfoIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={modeChange}>
            <ListItemIcon>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </ListItemIcon>
            <ListItemText primary={isDark ? `Light Mode` : `Dark Mode`} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default DrawerLeft;
