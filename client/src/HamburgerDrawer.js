import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu"; // added

import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core"; // added

//To set width and padding of list
const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fullList: {
    width: "auto",
  },
});
// component created
export default function SwipeableTemporaryDrawer({
  setCatAndCity,
  allCategory,
  allNewsCity,
  catAndCity,
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  //-------------------Code to add dark theme--------------------------------

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

  //----------------------------------------------------

  const toggleDrawer = (anchor, open) => (event) => {
    open === true
      ? setCatAndCity({ category: "all", city: "all" })
      : console.log("test");
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
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>

      <Divider />

      <List>
        {allCategory.map((text, index) => (
          <ListItem
            style={{ height: 40, borderRadius: 3 }}
            button
            onClick={() => setCatAndCity({ ...catAndCity, category: text })}
            key={text}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>Cities</ListItem>
      </List>

      <Divider />

      <List>
        {allNewsCity.map((text, index) => (
          <ListItem
            style={{ height: 40, borderRadius: 3 }}
            button
            onClick={() => setCatAndCity({ ...catAndCity, city: text })}
            key={text}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        {/* hamberger added icon, we have not created MenuIcon ,we have directly imported it from material UI and used it here */}
        <MenuIcon />
      </Button>

      {/* added */}

      {/* ThemeProvider is also taken from material ui, you can directly use it and put the theme what you have copied from the material ui*/}

      <ThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </ThemeProvider>
    </div>
  );
}
