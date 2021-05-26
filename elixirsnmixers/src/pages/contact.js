import { CardMedia, Typography, Container, Paper, Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/IMG_0017.JPG";
//import ProfileImg from "../images/IMG_0482.JPG";

const useStyles = makeStyles({
root: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: 800,
    top: 0
  },
  main:{
    marginBottom: 30,
    padding: 40,
  },
  mainP: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 30,
    marginTop: 250
  },
  button: {
    backgroundColor: "white"
  },
  form: {
      paddingRight: "50px",
      textAlign: "center",
      borderRight: "3px solid darkRed"
  },
  btnForm: {
      textAlign: "center",
  },
  header: {
    textAlign: "center",
    paddingBottom: 30,
    fontSize: "40px"
  }
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Container className={classes.main}>
      <Paper className={classes.mainP}>
        <Container className={classes.Container}>
              <Typography className={classes.header} >Contact Me</Typography>
        </Container>

        <Grid container spacing={3}>
           <Grid className={classes.form} xs={6}>
            <TextField className={classes.text} id="outlined-basic" label="Name" variant="outlined" />
            <br></br>
            <TextField className={classes.text} id="outlined-basic" label="Email" variant="outlined" />
            <br></br>
            <TextField className={classes.text} id="outlined-multiline-static" label="Message" multiline rows={4}
                        defaultValue="Default Value" variant="outlined"/>
            <br></br>
            <Button variant="outlined"> Submit </Button>
           </Grid>

           <Grid className={classes.btnForm} xs={6}>
               <Button className={classes.button} variant="contained"> one </Button>
               <br></br>
               <Button className={classes.button} variant="contained"> two </Button>
               <br></br>
               <Button className={classes.button} variant="contained"> three </Button>
           </Grid>
        </Grid>
       </Paper>
    </Container>
  </div>

  );
};

export default Contact;