import { Card, Typography, Button, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../images/IMG_1976.JPG";
import HomeCard from "../components/homeCard";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Image})`, 
    backgroundSize: "cover",
    maxWidth: '100%',
    height: "auto"
  },
  footer: {
    textAlign: "center",
    backgroundColor: "white",
    height: "170px",
    paddingTop: "30px",
    fontSize: 30,
  
  },
  barBtn: {
    color: "white",
    border: "3px solid white",
    left: 150,
    top: 450,
    fontSize: "20px",
    padding: "20px"
  },
  mainQuote: {
    color: "white",
    marginLeft: 150,
    marginTop: 550,
    fontSize: "20px",
    marginBottom: "250px"
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
    <Card className={classes.root}>

      <Button className={classes.barBtn} href="/aboutme" variant="outlined" >Meet your Bartender</Button>

      <Typography className={classes.mainQuote}> “Ac turpis egestas integer eget aliquet nibh praesent tristique 
        magna.
        <br></br> Id diam maecenas ultricies mi. 
        <br></br> Dictumst quisque sagittis purus sit amet volutpat consequat mauris.”
      </Typography>

      <HomeCard/>

    </Card>

     <Typography className={classes.footer}>
       “Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.”
      <br></br>       -Lorem Ipsum
     </Typography>
    </div>
  );
};

export default Home;