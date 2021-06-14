import { CardMedia, Paper, Typography, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/IMG_1296.JPG";
import ImageTwo from "../images/IMG_0021.JPG";
import SpacingGrid from "../components/recipeCard";
import data from "../components/App/data";



const useStyles = makeStyles({
  picOne: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "0px 32%",
    top: 0,
    height: "600px",
    marginBottom: "50px",
    borderBottom: "5px solid darkRed",
  },
  picTwo: {
    backgroundImage: `url(${ImageTwo})`,
    backgroundSize: "cover",
    backgroundPosition: " 0px 30%",
    top: 0,
    height: "500px",
    marginBottom: "50px",
    borderBottom: "5px solid darkRed",
  },
  special: {
      color: "black",
      fontSize: "60px",
      textAlign: "center",
      display: "fixed",
      paddingTop: "380px"
      
  },
  classic: {
      color: "white",
      fontSize: "60px",
      textAlign: "center",
      display: "fixed",
      paddingTop: "380px"
     },
     specialRecipes:{
         
      //   height: "auto",
         
     },
     container: {
       backgroundColor: "white",
       
     },
     card:{
      display: "flex" 
     }
});

const AboutMe = () => {
  const classes = useStyles();
  return (
    
    <div className={classes.container}>
          <CardMedia className={classes.picOne}>
              <Typography className={classes.special}>Specialty Cocktails</Typography>
          </CardMedia>

      <Grid container className= {classes.card}>
       
          <Paper className={classes.specialRecipes}>
          <Grid item xs={6}>
          {data.map(recipes => (

              <SpacingGrid 
              
              key={recipes.drink}
              drinkName= {recipes.drinkName}
              description= {recipes.description}
              ingredients= {recipes.ingredients}
              directions= {recipes.directions}
              barNotes={recipes.barNotes}
              image={recipes.image}/>
          ))}    
         </Grid>
          </Paper>
       
      </Grid>

          <CardMedia className={classes.picTwo}>
            <Typography className={classes.classic}>Classic Cocktails</Typography>
          </CardMedia>
          <Paper>

          </Paper>
      </div>
  )};

export default AboutMe;