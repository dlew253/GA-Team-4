import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/sass/styles.scss";
import moment from "moment";
import LogNavBar from "../Components/LogNavBar";
import SideList from "../Components/SideList";
import Footer from "../Components/Footer";

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <LogNavBar />
      <Typography>
        Hello User!
      </Typography>
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={3}>
          <SideList listType="event" events={[]}/>
        </Grid>
        <Grid item md={9}>
          <Calendar 
            className="calendar"
            localizer={localizer}
            events={[]} />
        </Grid>
      </Grid>
      <SideList listType="organization" organizations={[]} />
      <Footer />
    </div>
  );
}

export default Home;