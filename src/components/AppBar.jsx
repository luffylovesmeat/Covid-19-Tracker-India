import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { GitHub } from "@mui/icons-material";

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => props.setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Covid-19 Tracker
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            style={{ borderRadius: "8px", padding: "5px" }}
            href="https://github.com/luffylovesmeat/Covid-19-Tracker-India"
          >
            <GitHub fontSize="small" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
