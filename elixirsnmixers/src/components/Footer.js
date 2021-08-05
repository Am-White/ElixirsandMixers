//need to

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography,CardMedia } from "@material-ui/core";
import img from "../images/martini.png";


const useStyles = makeStyles({
  footerContainer: {
    maxWidth: "100%",
    padding: 0,
    margin: 0,
    textAlign: "center",
    position: "relative"
  },

  topTitle:{
    borderTop: "5px solid darkRed",
    fontSize: "30px",
    paddingTop: "15px",
    fontFamily: "Optima, sans-serif",
    textAlign: "center"
    
  },

  bottomCon: {
    backgroundColor: "darkRed",
    maxWidth: "100%",
    height: "150px",
    display:'flex', 
    justifyContent:'center'
    },

  imgIcon: {
    backgroundImage: `url(${img})`,
    height: "70px",
    width: "70px",
    position: "absolute",
    top: "65px"
  },

});

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.footerContainer}>
      <Container className={classes.bottomCon} >

        <Container>
        <Typography className={classes.topTitle}>Please Drink Well</Typography>
        </Container>
      
          <CardMedia className={classes.imgIcon} />

        {/* <Typography className={classes.bottomTitle}>
          Made with <FavoriteIcon fontSize="small"/> 
          <br></br>
          ©2021
        </Typography> */}

      </Container>
    </Container>
  );
};


export default Footer;