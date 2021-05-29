
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Paper, CardMedia } from "@material-ui/core";
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import img from "../images/IMG_1976.JPG";

const useStyles = makeStyles({
  footerContainer: {
    maxWidth: "100%",
    padding: 0,
    textAlign: "center",
    //position: "absolute",
    justifyContent: "center"
  },
  topCon: {
    
    width: "100%",
  },
  topTitle:{
    borderTop: "5px solid darkRed",
    fontSize: "50px",
    paddingTop: "15px"
  },
  bottomCon: {
    backgroundColor: "red",
    maxWidth: "100%",
    height: "100px",
  },
  imgIcon: {
    backgroundImage: `url(${img})`,
    borderRadius: "50%",
    height: "150px",
    width: "150px",
  }
});

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.footerContainer}>
      <Container className={classes.topCon}>
        <Typography className={classes.topTitle}>Please Drink Well</Typography>
      </Container>

      <CardMedia className={classes.imgIcon}/>
   
      <Container className={classes.bottomCon} >
        <Typography>
        Made with <FavoriteIcon/> 
        <br></br
        >©2021</Typography>
      </Container>
    </Container>
  );
};


export default Footer;