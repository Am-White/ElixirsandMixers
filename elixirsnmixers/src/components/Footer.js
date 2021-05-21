
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    margin: 0,
    top: 50,
    backgroundColor: "red",
    position: 'relative',
  }
});

const Footer = () => {
  const classes = useStyles();
  
  return (
    <Container className={classes.footer}>
       
            <Typography>Footer</Typography>

    </Container>
  );
};


export default Footer;