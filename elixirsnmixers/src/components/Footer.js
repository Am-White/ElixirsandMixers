
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles({
  footerContainer: {
    maxWidth: "100%",
    padding: 0,
    height: "300px",
    backgroundColor: "red",
    textAlign: "center",
    position: "absolute"
  }
});

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.footerContainer}>

            Footer

    </Container>
  );
};


export default Footer;