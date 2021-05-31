//IMPORTANT- Figure out how to make four different cards

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CardMedia, Typography, Button } from '@material-ui/core';
import Image from "../images/IMG_1976.JPG"
import AnimatedModal from './popoverbtn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "auto",
    width: "250px",
    backgroundColor: "lightGrey",
    marginBottom: "100px",
    textAlign: "center",
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
      backgroundImage: `url(${Image})`,
      height: "200px",

  },
  title: {
    
    fontSize: "30px"
  },
  recipeBtn: {
      
      fontSize: "10px"
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          
            <Grid  item>
              <Paper className={classes.paper}>
                  <CardMedia className={classes.media}/>

                  <Typography className={classes.title}> Drink Name </Typography>
                  <AnimatedModal/>
              </Paper>
            </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
}