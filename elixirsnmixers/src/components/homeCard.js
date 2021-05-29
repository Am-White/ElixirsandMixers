//IMPORTANT- Figure out how to make four different cards

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CardMedia, Typography, } from '@material-ui/core';
import Image from "../images/IMG_1976.JPG"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "350px",
    width: "200px",
    //marginTop: "300px",
    backgroundColor: "lightGrey",
    marginBottom: "100px",
    padding: 5
  },
  control: {
    padding: theme.spacing(2),
  },
  media1: {
      backgroundImage: `url(${Image})`,
      height: "200px",
      //url: '/recipes'
  },
  media2: {
    backgroundImage: `url(${Image})`,
    height: "200px",
},
  media3: {
    backgroundImage: `url(${Image})`,
    height: "200px",
},
  media4: {
    backgroundImage: `url(${Image})`,
    height: "200px",
},
  title: {
    textAlign: "center",
  },
  foot: {
   textAlign: "center",
    fontSize: "60px"
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
      {[0,].map((value) => (
        <Grid container justify="center" spacing={spacing}>
          
            <Grid key={value} item>
              <Paper className={classes.paper} >
                  <CardMedia className={classes.media1}/>

                  <Typography className={classes.title} variant="h5" > The Classics </Typography>
                  <Typography className={classes.foot}> ... </Typography>
              </Paper>
            </Grid>
            <Grid key={value} item>
              <Paper className={classes.paper} href="/recipes">
                  <CardMedia className={classes.media2}/>

                  <Typography className={classes.title} variant="h5"> Sho's Craft Cocktails </Typography>
                  <Typography className={classes.foot}> ... </Typography>
              </Paper>
            </Grid>
            <Grid key={value} item>
              <Paper className={classes.paper}>
                  <CardMedia className={classes.media3}/>

                  <Typography className={classes.title} variant="h5"> Inspiration and Tips </Typography>
                  <Typography className={classes.foot}> ... </Typography>
              </Paper>
            </Grid>
            <Grid key={value} item>
              <Paper className={classes.paper}>
                  <CardMedia className={classes.media4}/>

                  <Typography className={classes.title} variant="h5"> Seattle Bars</Typography>
                  <Typography className={classes.foot}> ... </Typography>
              </Paper>
            </Grid>
          
        </Grid>
        ))}
      </Grid>
    </Grid>
  );
}