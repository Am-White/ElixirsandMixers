import { CardMedia, CardContent, Card, Paper, Typography, Button, CardActionArea, CardActions, Grid  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/IMG_1296.JPG";
import ImageTwo from "../images/IMG_0021.JPG";
import SpacingGrid from "../components/recipeCard";



const useStyles = makeStyles({
  picOne: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "0px 32%",
    top: 0,
    height: "600px",
  },
  picTwo: {
    backgroundImage: `url(${ImageTwo})`,
    backgroundSize: "cover",
    backgroundPosition: " 0px 30%",
    top: 0,
    height: "500px",
  },
  special: {
      color: "black",
      fontSize: "60px",
      textAlign: "center",
      paddingTop: "25%"
      
  },
  classic: {
      color: "white",
      fontSize: "60px",
      textAlign: "center",
      paddingTop: "18%"
     },
     sRecipes:{
         backgroundColor: "white",
         height: "auto",
         borderTop: "5px solid darkRed",
     }
});

const AboutMe = () => {
  const classes = useStyles();
  return (
      <div className={classes.container}>
          <CardMedia className={classes.picOne}>
              <Typography className={classes.special}>Specialty Cocktails</Typography>
          </CardMedia>

          <Paper className={classes.sRecipes}>

              <SpacingGrid/>
                  
          </Paper>

          <CardMedia className={classes.picTwo}>
            <Typography className={classes.classic}>Classic Cocktails</Typography>
          </CardMedia>
          <Paper>

          </Paper>
      </div>
  );
};

export default AboutMe;