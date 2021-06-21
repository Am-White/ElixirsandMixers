//need to

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography,CardMedia } from "@material-ui/core";
import img from "../images/IMG_1976.JPG";


const useStyles = makeStyles({
  footerContainer: {
    maxWidth: "100%",
    padding: 0,
    margin: 0,
    textAlign: "center",
  },

  topCon: {
    maxWidth: "35%",
  },

  topTitle:{
    borderTop: "5px solid darkRed",
    fontSize: "50px",
    paddingTop: "15px"
  },

  bottomCon: {
    backgroundColor: "darkRed",
    maxWidth: "100%",
    maxHeight: "150px",
    //marginTop: "25px",
    display:'flex', 
    justifyContent:'center'
    },

  imgIcon: {
    backgroundImage: `url(${img})`,
    borderRadius: "50%",
    height: "150px",
    width: "150px"
  },

});

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.footerContainer}>

      <Container className={classes.topCon}>
        <Typography className={classes.topTitle}>Please Drink Well</Typography>


      </Container>

      <Container className={classes.bottomCon} >
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