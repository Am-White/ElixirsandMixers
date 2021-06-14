import { CardMedia, Typography, Grid,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/IMG_1296.JPG";
import ImageTwo from "../images/IMG_0021.JPG";
import RecipeCard from "../components/recipeCard";
import specialData from "../components/App/specialData";
import classicData from "../components/App/classicData";



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
  recipeContainer: {
    //Center all items
    marginBottom: 20,
    marginLeft: 20
  },
     container: {
       backgroundColor: "white",
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
});

const AboutMe = () => {
  const classes = useStyles();
  return (
    
    <div className={classes.container}>
          <CardMedia className={classes.picOne}>
              <Typography className={classes.special}>Specialty Cocktails</Typography>
          </CardMedia>

      <Grid container spacing={3} className={classes.recipeContainer}>
              {specialData.map(recipes => (
                <RecipeCard 
  
                key={recipes.drink}
                drinkName= {recipes.drinkName}
                description= {recipes.description}
                ingredients= {recipes.ingredients}
                directions= {recipes.directions}
                barNotes={recipes.barNotes}
                image={recipes.image}/>
              ))}    
       
      </Grid>

          <CardMedia className={classes.picTwo}>
            <Typography className={classes.classic}>Classic Cocktails</Typography>
          </CardMedia>
          
          
       
       <Grid container spacing={3} className={classes.recipeContainer}>
             {classicData.map(recipes => (
               <RecipeCard 

               key={recipes.drink}
               drinkName= {recipes.drinkName}
               description= {recipes.description}
               ingredients= {recipes.ingredients}
               directions= {recipes.directions}
               barNotes={recipes.barNotes}
               image={recipes.image}/>
             ))}        
       </Grid>
      
     
      </div>
  )};

export default AboutMe;