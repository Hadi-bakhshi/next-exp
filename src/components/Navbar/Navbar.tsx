import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:2 }}>
      <AppBar position="static" sx={{ backgroundColor: "#045D5D" }}>
        <Toolbar>
            <Sidebar/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            خوش آمدید
          </Typography>
          <Button color="inherit">
            <Link href="/login">ورود</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
