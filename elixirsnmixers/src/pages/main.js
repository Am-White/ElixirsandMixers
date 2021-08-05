import { Container, Box, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    height: "900px",
    position: "sticky",
    backgroundImage: "url(https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    backgroundSize: "cover",
    maxWidth: '100%',
  },
  question: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontFamily: "Optima, sans-serif",
    fontSize: "50px"
  },
  answer: {
    fontSize: "30px",
    margin: "20px",
    width: "200px",
    backgroundColor: "lightGrey",
    fontFamily: "Optima, sans-serif"
  },
  container: {
    marginTop: "400px", 
    marginBottom: "100px",
    backgroundColor: "grey",
    maxHeight: "500px",
    opacity: "92%",
  }
})


const Main = () => {

  const classes= useStyles();
  return (
    <Container className={classes.main}>
        <br/>
        <Box className={classes.container} boxShadow={5}>
            <Container  className={classes.question}>
            <Typography className={classes.title}> Are you over 21?</Typography>
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