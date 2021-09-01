import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import classes from "./Nav.module.css";

export default function NavBar() {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.nav}>
            <div>
              <Typography variant="h6" className={classes.title}>
                <Link href="/">Movie Review</Link>
              </Typography>
            </div>
            <div>
              <Link href="/movies">All Movies</Link>
              <Link href="/add-movie">Add Movie</Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
