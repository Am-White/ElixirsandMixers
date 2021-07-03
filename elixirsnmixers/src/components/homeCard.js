//IMPORTANT- Figure out how to make four different cards

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CardMedia, Typography, Button, Card, CardActions} from '@material-ui/core';
import Lemon from "../images/lemon.png";
import Martini from "../images/martini.png";
import Shaker from "../images/shaker.png";
import Map from "../images/map.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "350px",
    width: "200px",
    textAlign: "center",
    backgroundColor: "lightGrey",
    marginBottom: "100px",
    padding: 5
  },
  control: {
    padding: theme.spacing(2),
  },
  media1: {
      backgroundImage: `url(${Martini})`,
      width: "100px",
      height: "100px",
      margin: "25%"
  },
  media2: {
    backgroundImage: `url(${Lemon})`,
    width: "100px",
    height: "100px",
    margin: "25%"
},
  media3: {
    backgroundImage: `url(${Shaker})`,
    width: "100px",
    height: "100px",
    margin: "25%"
},
  media4: {
    backgroundImage: `url(${Map})`,
    width: "100px",
    height: "100px",
    margin: "25%"
},
  title: {
    textAlign: "center",
    fontSize: "auto",
  },
  foot: {
   justifyContent: "center",
  },
  footText: {
    fontSize: "50px",
    height: "inline",
    width: "70%"
  }
}));

export default function HomeCard() {
  const [spacing ] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      {[0,].map((value) => (
        <Grid container justify="center" spacing={spacing}>
          
            <Grid key={value} item>
              <Card className={classes.paper}>
                  <CardMedia className={classes.media1}/>
                  <Typography className={classes.title} > The Classics </Typography>

                  <CardActions className={classes.foot}>
                    <Button className={classes.footText} href="/recipes"> ... </Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid key={value} item>
              <Card className={classes.paper}>
                  <CardMedia className={classes.media2}/>

                  <Typography className={classes.title} > Sho's Craft Cocktails </Typography>
                  
                  <CardActions className={classes.foot}>
                    <Button className={classes.footText} href="/recipes"> ... </Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid key={value} item>
              <Card className={classes.paper}>
                  <CardMedia className={classes.media3}/>

                  <Typography className={classes.title} > Inspiration and Tips </Typography>
                  
                  <CardActions className={classes.foot}>
                    <Button className={classes.footText} href="/inspiration"> ... </Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid key={value} item>
              <Card className={classes.paper}>
                  <CardMedia className={classes.media4}/>

                  <Typography className={classes.title} > Seattle Bars</Typography>
                  
                  <CardActions className={classes.foot}>
                    <Button className={classes.footText}> ... </Button>
                  </CardActions>
              </Card>
            </Grid>
          
        </Grid>
        ))}
      </Grid>
    </Grid>
  );
}