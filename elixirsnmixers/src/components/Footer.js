
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    backgroundColor: "white",
    height: "150px",
    paddingTop: 20,
  },
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
       
            <Typography className={classes.footer}>“Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.”
                    -Lorem Ipsum
            </Typography>

            Footer

    </Container>
  );
};


export default Footer;