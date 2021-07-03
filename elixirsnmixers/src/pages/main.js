import { Container, Box, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    height: "725px"
  },
  question: {
    padding: "20px",
    textAlign: "center",
  },
  answer: {
    fontSize: "30px",
    margin: "20px",
    width: "200px",
    backgroundColor: "lightGrey",
  },
  container: {
    marginTop: "300px", 
    marginBottom: "100px",
    backgroundColor: "grey",
    maxHeight: "300px"
  }
})


const Main = () => {

  const classes= useStyles();
  return (
    <Container className={classes.main}>
        <br/>
        <Box className={classes.container} boxShadow={5}>
            <Container  className={classes.question}>
            <Typography style={{fontSize: "50px"}}> Are you over 21?</Typography>
            <Button variant="contained"  href="/home" className={classes.answer}>
              yes
            </Button>
            <Button variant="contained" href="https://blippi.com/" className={classes.answer}>
              no
            </Button>
            </Container>
        </Box>
    </Container>
  );
};

export default Main;