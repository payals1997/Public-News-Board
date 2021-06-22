import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core"; // added

const useStyles = makeStyles({
  list: {
    width: 200, // changed
    paddingLeft: 10, // changed
    paddingRight: 5, //changed
    paddingTop: 20,
    paddingBottom: 20,
  },

  fullList: {
    width: "auto",
  },
});
//SwipeableTemporaryDrawer
export default function Trending({ TrendingNews }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    // left: false,
    right: false,
  });

  //---------------------------------------------------

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "light" : "dark",
        },
      }),
    [prefersDarkMode]
  );

  // ----------------------------------------------------

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem> Trending News </ListItem>
      </List>
      <Divider />
      <List>
        {TrendingNews.map((text, index) => (
          <ListItem style={{ height: 50, borderRadius: 3 }} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>Trending News</Button>

      {/* added */}

      {/* ThemeProvider is also taken from material ui, you can directly use it and put the theme what you have copied from the material ui*/}

      <ThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </ThemeProvider>
    </div>
  );
}
