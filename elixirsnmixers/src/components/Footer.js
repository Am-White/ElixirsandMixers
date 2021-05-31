//align all items in center and overlap image

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Card, CardMedia } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import img from "../images/IMG_1976.JPG";


const useStyles = makeStyles({
  footerContainer: {
    maxWidth: "100%",
    padding: 0,
    textAlign: "center",
  },
  topCon: {
    //margin: "auto",
    
  },
  topTitle:{
    borderTop: "5px solid darkRed",
    fontSize: "50px",
    paddingTop: "15px"
  },
  bottomCon: {
    backgroundColor: "red",
    maxWidth: "100%",
    height: "150px",
    },

  imgIcon: {
    backgroundImage: `url(${img})`,
    borderRadius: "50%",
    height: "150px",
    width: "150px",
    alignContent: 'center',
    //marginBottom: "200px"
  },

});

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.footerContainer}>

      <Container className={classes.topCon}>
        <Typography className={classes.topTitle}>Please Drink Well</Typography>
      <CardMedia className={classes.imgIcon} />
      </Container>

      <Container className={classes.bottomCon} >
        <Typography className={classes.bottomTitle}>
          Made with <FavoriteIcon fontSize="small"/> 
          <br></br>
          ©2021
        </Typography>
      </Container>
    </Container>
  );
};


export default Footer;