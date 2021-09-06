import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import StarIcon from "@material-ui/icons/Star";
import { FaThList } from "react-icons/fa";
import dateFnsFormat from "date-fns/format";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import addDays from "date-fns/addDays";
import isToday from "date-fns/isToday";
let FORMAT = "dd/MM/yyyy";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
// .filter((el) => {
//   isAfter(el.date, new Date()) &&
//     isBefore(el.date, addDays(new Date(), 7));
export default function InsetList(props) {
  const classes = useStyles();
  const { tasks, selectedTab } = { ...props };
  {
    if (selectedTab == "next_7") {
      console.log("inside next_7");

      // const array = tasks.filter((el) => {
      //   // console.log(
      //   //   isAfter(el.date,new Date())
      //   // );
      //   console.log(isBefore(el.date, addDays(new Date(), 7)));
      //   if (
      //     isAfter(el.date, new Date())
      //     //  &&
      //     // isBefore(el.date, addDays(new Date(), 7))
      //   ) {
      //return el;
      //   }
      // });
      // console.log(array + "" + "mast");
      let i = 0;
      return (
        <List component="nav" className={classes.root} aria-label="contacts">
          {tasks
            .filter((el) => {
              if (
                isAfter(el.date, new Date()) &&
                isBefore(el.date, addDays(new Date(), 7))
              ) {
                console.log(++i);
                return el;
              }
            })
            .map((el) => {
              return (
                <ListItem button>
                  <ListItemIcon>
                    <FaThList />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      el.task +
                      "       " +
                      dateFnsFormat(new Date(el.date), FORMAT)
                    }
                  />
                </ListItem>
              );
            })}
        </List>
      );
    } else if (selectedTab == "today") {
      return (
        <List component="nav" className={classes.root} aria-label="contacts">
          {tasks
            .filter((el) => {
              if (isToday(el.date)) {
                return el;
              }
            })
            .map((el) => {
              return (
                <ListItem button>
                  <ListItemIcon>
                    <FaThList />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      el.task +
                      "       " +
                      dateFnsFormat(new Date(el.date), FORMAT)
                    }
                  />
                </ListItem>
              );
            })}
        </List>
      );
    } else if (selectedTab == "inbox") {
      return (
        <List component="nav" className={classes.root} aria-label="contacts">
          {tasks.map((el) => {
            return (
              <ListItem button>
                <ListItemIcon>
                  <FaThList />
                </ListItemIcon>
                <ListItemText
                  primary={
                    el.task +
                    "       " +
                    dateFnsFormat(new Date(el.date), FORMAT)
                  }
                />
              </ListItem>
            );
          })}
        </List>
      );
    }
  }
}
