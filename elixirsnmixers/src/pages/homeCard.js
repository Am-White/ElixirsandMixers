//IMPORTANT- Figure out how to make four different cards

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CardMedia, Typography } from '@material-ui/core';
import Image from "../images/IMG_1976.JPG"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "auto",
    width: "200px",
    //marginTop: "300px",
    backgroundColor: "lightGrey",
    marginBottom: "100px"
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
      backgroundImage: `url(${Image})`,
      height: "200px",

  },
  title: {
    textAlign: "center",
    fontSize: "30px"
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                  <CardMedia className={classes.media}/>

                  <Typography className={classes.title}> hihihi </Typography>
                  <Typography className={classes.title}> ... </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}