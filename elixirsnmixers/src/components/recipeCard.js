//IMPORTANT- Figure out how to make four different cards

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CardMedia, Typography, Card } from '@material-ui/core';
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
    textAlign: "center",
   },
  media: {
      backgroundImage: `url(${Image})`,
      height: "200px",
  },
  title: {
    fontSize: "30px"
  },

}));

export default function RecipeCard(props) {
  
  const classes = useStyles();

  const {drinkName} = props;

  return (
            <Grid item xs className={classes.root} >
              <Card className={classes.paper}>
                  <CardMedia className={classes.media}/>

                  <Typography className={classes.title} > {drinkName} </Typography>
                
                  <AnimatedModal {...props}/>
              </Card>
              </Grid>
            
  );
}