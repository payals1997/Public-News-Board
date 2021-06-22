import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useState } from "react";
import { useEffect } from "react";
import "./HambergerApp.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function SwipeableTemporaryDrawer({
  setCatAndCity,
  allCategory,
  allNewsCity,
  catAndCity,
}) {
  const [isSelected, setIsSelected] = useState({
    selected: false,
    color: "black",
  });
  /* function handleSelect() {
    setIsSelected(true);
  }
  useEffect(() => {
    console.log(isSelected);
  }, []);*/

  console.log(catAndCity);
  console.log(isSelected);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let myname = isSelected ? "mytypo1" : "mytypo";
  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton
          color="inherit"
          //    aria-label="open drawer"
          onClick={handleDrawerOpen}
          //edge="start"
          // className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => setCatAndCity({ city: "all", category: "all" })}
          >
            <ListItemText
              primary={
                <Typography style={{ color: "black" }}> All News </Typography>
              }
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography style={{ color: "grey" }}> Categories </Typography>
              }
            />
          </ListItem>
        </List>

        <Divider />

        <List>
          {allCategory.map((text, index) => (
            <ListItem
              // style={{ backgroundColor: "grey" }}
              button
              onClick={() => {
                setCatAndCity({ ...catAndCity, category: text });
                setIsSelected(true);
              }}
              key={text}
            >
              <ListItemText
                //      setIsSelected({selected:true, color:"red"});
                primary={
                  <Typography style={{ color: "black" }}> {text} </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography style={{ color: "grey" }}> Cities </Typography>
              }
            />
          </ListItem>
        </List>

        <Divider />
        <List>
          {allNewsCity.map((text, index) => (
            <ListItem
              button
              onClick={() => setCatAndCity({ ...catAndCity, city: text })}
              key={text}
            >
              <ListItemText
                primary={
                  <Typography style={{ color: "black" }}> {text} </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
